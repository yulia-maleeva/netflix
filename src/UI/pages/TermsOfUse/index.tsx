import React, { FC } from "react";

const TermsOfUse: FC = () => {
  window.scroll(0, 0);

  return (
    <div className="text-white">
      <h2 className="text-xl font-medium my-3">Terms of Use</h2>
      <div className="flex flex-col gap-4">
        <p>
          Please read these Terms of Use ("Terms") carefully before using
          Netflix streaming platform. By accessing or using our services, you
          agree to be bound by these Terms, including any additional guidelines
          and future modifications. If you do not agree with any part of these
          Terms, please do not use our platform.
        </p>
        <h3 className="text-lg font-bold">User Responsibilities</h3>
        <p>
          <h2 className="font-bold">1.1 Account Creation:</h2>
          You must create an account to access and use Netflix. You are
          responsible for providing accurate and up-to-date information during
          the registration process. You are also responsible for maintaining the
          confidentiality of your account credentials and for any activity that
          occurs under your account.
        </p>
        <p>
          <h2 className="font-bold">1.2 Compliance with Applicable Laws:</h2>
          You agree to comply with all applicable laws, regulations, and
          third-party rights when using Netflix. You must not use our platform
          for any illegal or unauthorized purposes.
        </p>
        <p>
          <h2 className="font-bold">1.3 Prohibited Activities:</h2>
          You must not engage in any activities that may interfere with or
          disrupt the functioning of Netflix, including but not limited to
          transmitting viruses, spamming, hacking, or any other malicious or
          unauthorized activities.
        </p>
        <h3 className="text-lg font-bold">Intellectual Property Rights</h3>
        <p>
          <h2 className="font-bold">2.1 Ownership:</h2>
          All intellectual property rights in Netflix, including but not limited
          to the content, trademarks, logos, and software, are owned by or
          licensed to us. You acknowledge that you do not acquire any ownership
          rights by using our platform.
        </p>
        <p>
          <h2 className="font-bold">2.2 Content Usage: </h2>
          You may access and stream the content available on Netflix solely for
          your personal, non-commercial use. You are not allowed to reproduce,
          distribute, modify, or publicly display any content from our platform
          without our prior written consent.
        </p>
        <h3 className="text-lg font-bold">Third-Party Content and Links</h3>
        <p>
          <h2 className="font-bold">3.1 Third-Party Content:</h2>
          Netflix may include content from third parties, such as movies, TV
          shows, and advertisements. We do not endorse or assume any
          responsibility for any third-party content. Your interactions with
          third-party content are solely between you and the respective third
          party.
        </p>
        <p>
          <h2 className="font-bold">3.2 External Links:</h2>
          Our platform may contain links to external websites or services that
          are not owned or controlled by Netflix. We are not responsible for the
          availability, content, or accuracy of these third-party links. Your
          use of any third-party websites or services is at your own risk.
        </p>
        <p>
          <h3 className="text-lg font-bold">Termination</h3>
          We reserve the right to suspend, terminate, or restrict your access to
          Netflix without prior notice or liability if we believe that you have
          violated these Terms or engaged in any fraudulent, illegal, or
          unauthorized activities. We also reserve the right to modify, suspend,
          or discontinue our platform at any time without liability.
        </p>
        <p>
          <h3 className="text-lg font-bold">Limitation of Liability</h3>
          To the maximum extent permitted by law, Netflix and its affiliates,
          directors, employees, agents, and licensors shall not be liable for
          any direct, indirect, incidental, consequential, or special damages
          arising out of or in connection with your use of our platform,
          including but not limited to loss of profits, data, or goodwill.
        </p>
        <p>
          <h3 className="text-lg font-bold">Governing Law</h3>
          These Terms shall be governed by and construed in accordance with the
          laws of USA. Any disputes arising out of or relating to these Terms or
          your use of Netflix shall be subject to the exclusive jurisdiction of
          the courts located in USA.
        </p>
        <p>
          <h3 className="text-lg font-bold">Contact Us</h3>
          If you have any questions, concerns, or feedback regarding these
          Terms, please contact us through our contact form on our website or by
          emailing us at{" "}
          <a
            href="mailto: iqeen94@gmail.com"
            className="underline deoration-1 "
          >
            iqeen94@gmail.com
          </a>
          . We appreciate your feedback and strive to address any inquiries in a
          timely manner.
        </p>
        <p>
          By using Netflix and its services, you agree to comply with these
          Terms of Use. Thank you for choosing Netflix, and enjoy your streaming
          experience!
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
