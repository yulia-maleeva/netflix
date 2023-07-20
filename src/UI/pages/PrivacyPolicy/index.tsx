import React, { FC } from "react";

const PrivacyPolicy: FC = () => {
  window.scroll(0, 0);

  return (
    <div className="text-white">
      <h2 className="text-xl font-medium my-3">Privacy Policy</h2>
      <div className="flex flex-col gap-4">
        <p>
          At Netflix, we are committed to protecting your privacy and ensuring
          the security of your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you use our Netflix streaming platform.
        </p>
        <p>
          <h2 className="font-bold">Information We Collect</h2>
          When you sign up for Netflix and use our services, we may collect
          certain personal information from you, including but not limited to
          your name, email address, billing information, and viewing
          preferences. We may also collect non-personal information such as your
          device type, IP address, and cookies for analytics and customization
          purposes.
        </p>
        <p>
          <h2 className="font-bold">How We Use Your Information</h2>
          We use the information we collect to provide and improve our streaming
          services, personalize your experience, process payments, communicate
          with you, and send you relevant updates and promotional offers. We may
          also use your data to analyze usage patterns, troubleshoot technical
          issues, and enhance the security and performance of our platform.
        </p>
        <p>
          <h2 className="font-bold">Data Security and Retention</h2>
          We take the security of your information seriously. We implement
          industry-standard security measures to protect your personal data
          against unauthorized access, disclosure, alteration, or destruction.
          We retain your information only for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
        <p>
          <h2 className="font-bold">Information Sharing and Disclosure</h2>
          We may share your personal information with trusted third-party
          service providers who assist us in delivering our services and
          operating our business. These partners are contractually obligated to
          handle your data securely and confidentially. We may also disclose
          your information when required by law or in response to legal
          requests, protect our rights or the rights of other users, and prevent
          fraud or harm.
        </p>
        <p>
          <h2 className="font-bold">Cookies and Tracking Technologies</h2>
          We use cookies and similar tracking technologies to enhance your
          browsing experience and collect information about how you interact
          with our platform. These technologies allow us to remember your
          preferences, customize content, analyze trends, and measure the
          effectiveness of our marketing campaigns. You have the option to
          disable cookies through your browser settings, but please note that
          some features of our platform may not function properly as a result.
        </p>
        <p>
          <h2 className="font-bold">Third-Party Links and Services</h2>
          Our platform may contain links to third-party websites or services
          that are not owned or controlled by Netflix. We are not responsible
          for the privacy practices or content of these third parties. We
          encourage you to review the privacy policies of any third-party sites
          or services before providing any personal information.
        </p>
        <p>
          <h2 className="font-bold">Children's Privacy</h2>
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from individuals in this
          age group. If we become aware that we have inadvertently collected
          personal information from a child under 13, we will take steps to
          delete the information as soon as possible.
        </p>
        <p>
          <h2 className="font-bold">Updates to this Privacy Policy</h2>
          We may update this Privacy Policy periodically to reflect changes in
          our information practices. We encourage you to review this page
          regularly for any updates. Your continued use of our services after
          the posting of any modifications to this policy will constitute your
          acknowledgment of the modifications and your consent to abide by the
          updated terms.
        </p>
        <p>
          <h2 className="font-bold">Contact Us</h2>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or the handling of your personal information, please
          contact us through our contact form on our website or by emailing us
          at{" "}
          <a
            href="mailto: iqeen94@gmail.com"
            className="underline deoration-1 "
          >
            iqeen94@gmail.com
          </a>
          . We will strive to respond to your inquiries in a timely and
          appropriate manner.
        </p>
        <p>
          By using Netflix and its services, you agree to the terms outlined in
          this Privacy Policy. We appreciate your trust in us and are committed
          to protecting your privacy and providing you with a secure and
          enjoyable streaming experience.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
