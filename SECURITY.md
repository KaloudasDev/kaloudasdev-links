## Security Policy

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability within the KaloudasDev LinkHub website, please follow these steps:

### Email Reporting

Send detailed information about the vulnerability to: **kaloudasdev@gmail.com**

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### ⏱Response Timeline

- **24-48 hours**: Initial acknowledgment of your report
- **5-7 days**: Investigation and validation
- **14 days**: Fix implementation or mitigation plan
- **30 days**: Public disclosure (if applicable)

### What to Expect

- Confidential handling of your report
- Regular updates on progress
- Credit for discovery (unless you prefer anonymity)
- No legal action against good-faith security research

## Security Best Practices

### For Users
- Always use the latest version
- Report suspicious behavior immediately
- Verify HTTPS connection (look for the padlock icon)

### For Contributors
- Never commit sensitive data
- Use environment variables for configuration
- Keep dependencies updated
- Follow secure coding guidelines
- Run security audits regularly

## Security Features

This project implements:

- **Content Security Policy** headers
- **XSS protection** mechanisms
- **Clickjacking** prevention
- **Secure cookies** configuration
- **Input validation** for all user inputs
- **Rate limiting** for API requests
- **CORS** proper configuration

## Disclosure Policy

We follow a coordinated disclosure process:

1. Reporter submits vulnerability details
2. Team validates and triages the issue
3. Fix developed and tested internally
4. Update released to all users
5. Public disclosure (after 30 days)

**Last Updated**: February 20, 2026  
**Contact**: kaloudasdev@gmail.com