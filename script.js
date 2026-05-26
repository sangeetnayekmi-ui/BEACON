// Type JS
document.addEventListener("DOMContentLoaded", function () {
        var typed = new Typed("#typed-text", {
          strings: [
            "Where Vission Meets Opportunity.",
            "Where Vission Meets Opportunity.",
          ],
          typeSpeed: 70,
          backSpeed: 40,
          loop: true,
          cursorChar: "|",
          smartBackspace: true,
        });
      });

// Testimonial
      $(document).ready(function () {
        const testimonials = [
          {
            id: 1,
            name: "Rita Browny",
            role: "Developer",
            img: "images/testimonial-img-1.png",
            text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!, I saved $2400 on my project",
          },
          {
            id: 2,
            name: "James Carter",
            role: "Senior Developer",
            img: "images/testimonial-img-2.png",
            text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!, I saved $2400 on my project and learned a new skill!",
          },
          {
            id: 3,
            name: "Rita Brown",
            role: "VP Marketing at Bowl",
            img: "images/testimonial-img-3.png",
            text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new",
          },
          {
            id: 4,
            name: "Emily White",
            role: "Freelancher",
            img: "images/testimonial-img-4.png",
            text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do.i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
          },
          {
            id: 5,
            name: "Michael Smith",
            role: "Freelance Artist",
            img: "images/testimonial-img-5.png",
            text: "I was planning on doing a DIY project at home since i had more time now adays and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck,solve that issue in minutes! I saved $2400 on my project and learned a new skill!, I saved $2400 on my project",
          },
        ];

        let currentIndex = 2;
        const container = $("#facesContainer");

        function initCarousel() {
          container.empty();
          testimonials.forEach((person, index) => {
            const img = $(
              `<img src="${person.img}" class="face-item" alt="${person.name}" data-index="${index}">`,
            );
            img.click(function () {
              Carousel($(this).data("index"));
            });
            container.append(img);
          });
          Carousel(currentIndex);
        }

        function Carousel(newIndex) {
          currentIndex = newIndex;

          const textWrapper = $("#textWrapper");
          textWrapper.addClass("changing");

          setTimeout(() => {
            const person = testimonials[currentIndex];
            $("#quoteText").text(person.text);
            $("#authorName").text(person.name);
            $("#authorRole").text(person.role);
            textWrapper.removeClass("changing");
          }, 300);

          const total = testimonials.length;
          $(".face-item").each(function () {
            const itemIndex = $(this).data("index");
            let diff = (itemIndex - currentIndex) % total;
            if (diff < -Math.floor(total / 2)) diff += total;
            if (diff > Math.floor(total / 2)) diff -= total;

            $(this).removeClass(
              "state-center state-near-left state-near-right state-far-left state-far-right state-hidden",
            );

            if (diff === 0) $(this).addClass("state-center");
            else if (diff === 1) $(this).addClass("state-near-right");
            else if (diff === -1) $(this).addClass("state-near-left");
            else if (diff === 2) $(this).addClass("state-far-right");
            else if (diff === -2) $(this).addClass("state-far-left");
            else $(this).addClass("state-hidden");
          });
        }

        $("#testimonial-next-btn").click(function () {
          let next = (currentIndex + 1) % testimonials.length;
          Carousel(next);
        });

        $("#testimonial-prev-btn").click(function () {
          let prev =
            (currentIndex - 1 + testimonials.length) % testimonials.length;
          Carousel(prev);
        });

        initCarousel();
      });