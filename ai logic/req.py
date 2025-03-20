import re
import dns.resolver
import smtplib

def is_valid_email(email):
    """Basic email syntax check."""
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email) is not None

def domain_exists(email):
    """Check if the domain exists and has MX records."""
    domain = email.split('@')[1]
    try:
        mx_records = dns.resolver.resolve(domain, 'MX')
        return True
    except dns.resolver.NXDOMAIN:
        return False
    except dns.resolver.NoAnswer:
        return False
    except dns.exception.Timeout:
        return False # Handle timeout issues
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return False

def smtp_check(email):
    """Check if the email *might* exist using SMTP (use with caution)."""
    domain = email.split('@')[1]
    try:
        mx_records = dns.resolver.resolve(domain, 'MX')
        mx_host = str(mx_records[0].exchange)

        server = smtplib.SMTP(timeout=5)  # Shorter timeout
        server.connect(mx_host)
        server.helo('mydomain.com')  # Replace with your domain
        server.mail('test@mydomain.com')  # Replace with your address
        code, message = server.rcpt(email)
        server.quit()

        if code == 250 or code == 251: # code 251 is also a success
            return True
        else:
            print(f"RCPT TO returned code: {code}, message: {message}")
            return False

    except smtplib.SMTPServerDisconnected:
        print("Server disconnected unexpectedly")
        return False
    except smtplib.SMTPConnectError as e:
         print(f"SMTP Connect error: {e}")
         return False
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return False


email = "sales.pgfdfwc@pwcs.com"

if not is_valid_email(email):
    print("Invalid email syntax")
elif not domain_exists(email):
    print("Domain does not exist")
elif smtp_check(email):
    print("Email *might* exist (proceed with caution)")
else:
    print("Email likely does not exist")

print("The most reliable method is to send a confirmation email.")
