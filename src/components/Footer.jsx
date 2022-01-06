import React from "react";
import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <div className="footer">
      <footer class=".footer-transparent">
        <div class="container">
          <p class="m-0 text-center text-black">
          <SocialIcon url="https://twitter.com/tulsadao" target="_blank" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon url="https://linkedin.com/in/tulsadao" target="_blank" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon url="https://discord.gg/okie" target="_blank" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon url="https://www.facebook.com/groups/2535157100090498" target="_blank" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon url="https://www.github.com/icculp/tulsadao" target="_blank" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon url="https://www.tulsadao.com" target="_blank" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon url="https://www.instagram.com/tulsadao" target="_blank" />
          <br />
            &copy; 2022 TulsaDAO
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;