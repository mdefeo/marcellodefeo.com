import { gsap } from "gsap";
import { ANIMATION_DURATION, FINAL_WIDTH, FINAL_HEIGHT, EASE, END_BORDER_CLASS } from "@/lib/constants/animation";

export const animateBorders = (callback: () => void) => {
  const borders = {
    top: document.querySelector('.border-top') as HTMLElement | null,
    right: document.querySelector('.border-right') as HTMLElement | null,
    bottom: document.querySelector('.border-bottom') as HTMLElement | null,
    left: document.querySelector('.border-left') as HTMLElement | null,
  };

  if (borders.top && borders.right && borders.bottom && borders.left) {
    gsap.to([borders.top, borders.right, borders.bottom, borders.left], {
      duration: ANIMATION_DURATION,
      opacity: 1,
      ease: EASE,
    });

    gsap.to(borders.top, {
      duration: ANIMATION_DURATION,
      width: FINAL_WIDTH,
      ease: EASE,
      onComplete: () => {
        gsap.to(borders.right, {
          duration: ANIMATION_DURATION,
          height: FINAL_HEIGHT,
          ease: EASE,
          onComplete: () => {
            gsap.to(borders.bottom, {
              duration: ANIMATION_DURATION,
              width: FINAL_WIDTH,
              ease: EASE,
              transformOrigin: "right center",
              onComplete: () => {
                gsap.to(borders.left, {
                  duration: ANIMATION_DURATION,
                  height: FINAL_HEIGHT,
                  ease: "sine.in",
                  onComplete: () => {
                    gsap.to([borders.top, borders.right, borders.bottom, borders.left], {
                      duration: 0.2,
                      onComplete: () => {
                        borders.top?.classList.add(END_BORDER_CLASS);
                        borders.right?.classList.add(END_BORDER_CLASS);
                        borders.bottom?.classList.add(END_BORDER_CLASS);
                        borders.left?.classList.add(END_BORDER_CLASS);

                        setTimeout(() => {
                          callback();
                        }, 300);
                      },
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }

};