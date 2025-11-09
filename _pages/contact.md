---
layout: none
title: Contact
permalink: /contact/
nav: true
nav_order: 8
---

<!DOCTYPE html>
<html lang="{{ site.lang }}">
  {% include head.liquid %}
  <body class="fixed-top-nav">
    {% include header.liquid %}
    
    <style>
      /* Full-width background for contact page */
      .contact-page-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('{{ "/assets/img/prof_pic_2.jpg" | relative_url }}');
        background-size: cover;
        background-position: center right;
        background-attachment: fixed;
        background-repeat: no-repeat;
        padding: 4rem 2rem;
        overflow-y: auto;
        padding-top: calc(64px + 4rem);
      }

      /* Hide footer */
      footer {
        display: none !important;
      }

      /* Hide Recent Updates section */
      .latest-posts {
        display: none !important;
      }

      body {
        overflow: hidden;
      }

      .contact-page-wrapper::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
        pointer-events: none;
      }

      .contact-layout {
        position: relative;
        z-index: 2;
        max-width: 600px;
        margin: 0 auto 0 5%;
      }

      @media (max-width: 968px) {
        .contact-page-wrapper {
          padding: 2rem 1rem;
        }
        
        .contact-layout {
          margin: 0 auto;
        }
      }
    </style>

    <div class="contact-page-wrapper">
      <div class="contact-layout">
        <!-- Contact Form -->
        {% include contact_form.liquid %}
      </div>
    </div>

  </body>
</html>