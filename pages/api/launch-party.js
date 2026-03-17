export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, profession } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required" });
  }

  // Accept 10-digit numbers starting with 0, or international + format
  if (!phone || !/^(0\d{9}|\+\d{7,15})$/.test(phone.replace(/[\s\-]/g, ""))) {
    return res.status(400).json({ error: "Enter a valid phone number (10 digits starting with 0, or +country code)" });
  }

  if (!profession || !profession.trim()) {
    return res.status(400).json({ error: "Profession is required" });
  }

  const apiKey = process.env.MAILER_LITE_APIKEY;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  };

  try {
    // Find the launch_party group
    const groupRes = await fetch(
      "https://connect.mailerlite.com/api/groups?filter[name]=launch_party",
      { headers }
    );
    const groupData = await groupRes.json();
    const group = groupData.data?.[0];

    if (!group) {
      return res.status(500).json({ error: "Registration group not found" });
    }

    // Create subscriber and add to group
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        fields: {
          name,
          phone,
          company_or_organization: profession
        },
        groups: [group.id]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || "Registration failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
