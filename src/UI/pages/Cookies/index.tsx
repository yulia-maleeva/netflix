import React, { FC } from "react";

const Cookies: FC = () => {
  window.scroll(0, 0);

  return (
    <div className="text-white">
      <h2 className="text-xl font-medium my-3">Cookies</h2>
      <div className="flex flex-col gap-4">
        <p>
          This Cookie Policy explains how Netflix ("we," "us," or "our") uses
          cookies and similar tracking technologies when you visit and use our
          Netflix streaming platform. By using our platform, you consent to the
          use of cookies and the collection of information as described in this
          policy.
        </p>
        <p>
          <h3 className="text-lg font-bold">What Are Cookies?</h3>
          Cookies are small text files that are placed on your device (computer,
          smartphone, or tablet) when you visit a website. They are widely used
          to make websites work or improve their efficiency, as well as to
          provide information to the website owners.
        </p>
        <h3 className="text-lg font-bold">Types of Cookies We Use</h3>
        <p>
          <h2 className="font-bold">1. Essential Cookies:</h2>
          These cookies are necessary for the functioning of our platform and
          cannot be disabled. They enable basic features such as user
          authentication, account management, and security.
        </p>
        <p>
          <h2 className="font-bold">2. Performance and Analytics Cookies:</h2>
          We use these cookies to collect information about how visitors use our
          platform, such as the number of visitors, the pages visited, and the
          source of traffic. This helps us analyze and improve the performance
          of our platform. These cookies do not collect personally identifiable
          information.
        </p>
        <p>
          <h2 className="font-bold">3. Functionality Cookies:</h2>
          These cookies allow our platform to remember choices you make (such as
          your preferred language or region) and provide enhanced features. They
          may also be used to provide a more personalized experience by
          remembering your preferences and settings.
        </p>
        <p>
          <h2 className="font-bold">4. Advertising and Targeting Cookies:</h2>
          We may use these cookies to deliver personalized advertisements based
          on your interests and online activities. They help us display relevant
          ads and measure the effectiveness of our advertising campaigns. These
          cookies may be set by us or by third-party advertising partners.
        </p>
        <p>
          <h3 className="text-lg font-bold">Managing Cookie Preferences</h3>
          You can manage your cookie preferences and settings by adjusting the
          settings in your browser. Most web browsers allow you to control
          cookies through their settings or preferences. Please note that
          disabling or blocking certain cookies may affect the functionality and
          performance of our platform.
        </p>
        <p>
          You can also opt-out of certain third-party cookies used for
          advertising purposes by visiting the Network Advertising Initiative
          (NAI) opt-out page or the Digital Advertising Alliance (DAA) opt-out
          page. These opt-out mechanisms are cookie-based, so if you delete
          cookies or use a different device or browser, you may need to opt-out
          again.
        </p>
        <p>
          For more information on how to manage cookies, you can refer to the
          help section or documentation of your browser.
        </p>
        <p>
          <h3 className="text-lg font-bold">Updates to this Cookie Policy</h3>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We encourage you to review this policy regularly to stay
          informed about how we use cookies.
        </p>
        <p>
          <h3 className="text-lg font-bold">Contact Us</h3>
          If you have any questions, concerns, or requests regarding this Cookie
          Policy or the use of cookies on our platform, please contact us
          through our contact form on our website or by emailing us at{" "}
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
          By continuing to use our Netflix platform, you consent to the use of
          cookies as described in this Cookie Policy. Thank you for choosing
          Netflix, and enjoy your streaming experience!
        </p>
      </div>
    </div>
  );
};

export default Cookies;
