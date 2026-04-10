---
title: "SSH Keys with Touch ID Support"
date: "2026-04-10"
excerpt: "Generate SSH key pairs that work with Touch ID on macOS. Here's how to set it up."
---

Here we can generate an SSH key pair that works with your Touch ID. So, it's pretty cool. Here's how to do it.

## 1. Create a Key with Touch ID

```bash
sc_auth create-ctk-identity -l ssh -k p-256-ne -t bio
```

- `-l ssh` — label for the key
- `-k p-256-ne` — **non-exportable** P-256 key (stays in Secure Enclave)
- `-t bio` — requires Touch ID/biometrics to use

Verify it was created:

```bash
sc_auth list-ctk-identities
```

## 2. Generate the SSH Keys Based on the Above Key

Go to `~/.ssh` and type:

```bash
ssh-keygen -w /usr/lib/ssh-keychain.dylib -K -N ""
```

This will generate `id_ecdsa_sk_rk.pub` and `id_ecdsa_sk_rk` in the current directory. These are your public and private keys.

## 3. Add the Private Key to the SSH Agent

```bash
ssh-add --apple-use-keychain -S /usr/lib/ssh-keychain.dylib ~/.ssh/id_ecdsa_sk_rk
```

You need to do this every time you restart your MacBook. Alternatively, you can add the following to `~/.ssh/config`:

```
Host *
  IdentityFile ~/.ssh/id_ecdsa_sk_rk
  SecurityKeyProvider /usr/lib/ssh-keychain.dylib
```

> Now this key is used for all hosts, but you can selectively configure it if needed.

## 4. Add the Public Key

Now use `id_ecdsa_sk_rk.pub` on any service or `~/.ssh/authorized_keys` on any device.

Then you can log into those servers with the generated key, and you'll need to use Touch ID.

## 5. Forward the SSH Agent (if Needed)

Let's say you have a deploy script on a dev machine, but it needs the SSH key on your MacBook for the deployment server. You can forward the SSH agent and run the script from the dev server.

Then, it will ask you to authenticate via Touch ID.

You can even ask Claude or other agents to work on the production deployment server (not recommended) inside the deployment server. Then, every time Claude uses SSH, you'll need to use Touch ID and authorize it.
