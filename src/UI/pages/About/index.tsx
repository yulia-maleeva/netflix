import React, { FC } from "react";

const About: FC = () => {
  window.scroll(0, 0);

  return (
    <div className="text-white">
      <h2 className="text-xl font-medium my-3">About us</h2>
      <div className="flex flex-col gap-4">
        <p>
          Welcome to Netflix! We are a passionate team dedicated to providing
          the best streaming experience for our users. Here at Netflix, we
          believe in the power of entertainment and its ability to bring people
          together.
        </p>
        <p>
          <h2 className="font-bold">Our Mission</h2>
          At Netflix, our mission is to revolutionize the way you enjoy movies
          and TV shows. We strive to deliver a wide selection of high-quality
          content, accessible anytime, anywhere. Our goal is to create an
          immersive and personalized streaming platform that caters to your
          unique preferences and interests.
        </p>
        <p>
          <h2 className="font-bold">What We Offer</h2>
          With Netflix, you gain access to an extensive library of movies, TV
          series, documentaries, and more. We are constantly expanding our
          collection to ensure there's always something for everyone. From
          critically acclaimed classics to the latest blockbusters, we've got
          you covered.
        </p>
        <p>
          <h2 className="font-bold">Seamless Streaming Experience</h2>
          We prioritize providing a seamless streaming experience for our users.
          Our platform is designed with user-friendliness in mind, allowing you
          to easily navigate, discover, and enjoy your favorite content. Whether
          you're on your TV, computer, or mobile device, we ensure smooth
          playback and minimal interruptions.
        </p>
        <p>
          <h2 className="font-bold">Personalized Recommendations</h2>
          Discovering new content should be exciting, not overwhelming. That's
          why we employ advanced algorithms to curate personalized
          recommendations based on your viewing history and preferences. Our
          goal is to help you find hidden gems and explore new genres that align
          with your interests.
        </p>
        <p>
          <h2 className="font-bold">Quality and Convenience</h2>
          At Netflix, we are committed to delivering content of the highest
          quality. From stunning visuals to immersive audio, we strive to
          provide you with an exceptional streaming experience. Additionally,
          our platform allows you to stream content at your convenience, giving
          you the freedom to watch whenever and wherever you want.
        </p>
        <p>
          <h2 className="font-bold">Customer Support</h2>
          We value our users and their satisfaction is our top priority. Our
          dedicated customer support team is available to assist you with any
          questions, concerns, or technical issues you may encounter. We are
          here to ensure that your streaming experience with Netflix is as
          smooth and enjoyable as possible.
        </p>
        <p>
          <h2 className="font-bold">Join Us</h2>
          Join Netflix today and become a part of our vibrant community of
          entertainment enthusiasts. Experience the joy of unlimited streaming
          and immerse yourself in a world of captivating stories. We can't wait
          to accompany you on this incredible streaming journey.
        </p>
        <p>
          <h2 className="font-bold">Contact Us</h2>
          If you have any inquiries or feedback, we would love to hear from you.
          You can reach us through our contact form on our website or by
          emailing us at{" "}
          <a
            href="mailto: iqeen94@gmail.com"
            className="underline deoration-1 "
          >
            iqeen94@gmail.com
          </a>
          . We value your input and are continuously working to improve our
          services based on your suggestions.
        </p>
        <p>
          Thank you for choosing Netflix. Get ready for an unparalleled
          entertainment experience!
        </p>
      </div>
    </div>
  );
};

export default About;
