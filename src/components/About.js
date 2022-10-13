import React from 'react';
import {SVG_Twitter, SVG_Facebook, SVG_Instagram, SVG_Pinterest, SVG_Youtube} from '../../public/svg/svg'

export default function About() {
  return (
    <>
      {/* Section About */}
      <section id="about" className="section_about">
        <div className="container narrow">
          <div className="about_me">
            <div className="about_me_text">
              <p>A highly technical engineering professional with a solid software engineering background and development expertise. I build readymade websites, mobile applications, and elaborate online business services.
              </p>
            </div>
            <div className="about_me_more">
              <ul>
                <li>
                  <a href="https://twitter.com/marcancajas_" target="_blank" title="twitter.com">
                    <SVG_Twitter/>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/mancajas/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_follower_visibility_disclosure=0" target="_blank" title="facebook.com">
                    <SVG_Facebook/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/marcancajas/" target="_blank" title="instagram.com">
                    <SVG_Instagram/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /Section About */}
    </>
  );
}

