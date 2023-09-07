import React from "react";
import Link from "next/link";
import Stack from "@atom/stack";
import { CONTACT } from "routes";
import Typography from "@atom/typography";

const Privacy = () => {
  return (
    <Stack className="container mx-auto mt-32 flex-col space-y-14">
      <Stack className="w-full flex-col space-y-6 items-start">
        <Typography variant="h4">Privacy Policy</Typography>
        <Typography>
          At Organic Shop, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
        </Typography>
      </Stack>

      <Stack className="w-full flex-col space-y-6 items-start">
        <Typography variant="h5">1. What information do we collect?</Typography>
        <Typography>
          We collect information that you provide when making a purchase, creating an account, or contacting us. This may include your name, email address, shipping address, and payment details.
        </Typography>
      </Stack>

      <Stack className="w-full flex-col space-y-6 items-start">
        <Typography variant="h5">2. How do we use your information?</Typography>
        <Typography>
          We use your information to process orders, improve our services, and communicate with you about your purchases and promotions. We do not share your data with third parties without your consent.
        </Typography>
      </Stack>

      <Stack className="w-full flex-col space-y-6 items-start">
        <Typography variant="h5">3. How do we protect your information?</Typography>
        <Typography>
          We employ industry-standard security measures to protect your data. This includes secure data encryption, regular security audits, and restricted access to personal information.
        </Typography>
      </Stack>

      <Stack className="w-full flex-col space-y-6 items-start">
        <Typography variant="h5">4. What are your rights?</Typography>
        <Typography>
          You have the right to access, update, and delete your personal information. If you have any questions or concerns about your data, please contact us.
        </Typography>
      </Stack>

      <Stack className="w-full flex-col space-y-6 items-start">
        <Typography variant="h5">5. Changes to our Privacy Policy</Typography>
        <Typography>
          We may update our Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on our website.
        </Typography>
      </Stack>

      <Link href={CONTACT} className="w-full">
        <Stack className="flex-col space-y-6 items-start">
          <Stack className="flex-col space-y-6 items-start">
            <Typography variant="h5">Contact Us</Typography>
            <Typography>
              Have questions or need assistance? Our friendly customer support team is here to help. Feel free to contact us for
              any inquiries or feedback. Your satisfaction is our top priority.
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Stack>
  );
};

export default Privacy;
