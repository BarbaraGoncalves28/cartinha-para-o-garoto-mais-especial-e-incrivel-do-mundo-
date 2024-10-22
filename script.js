document.getElementById("envelope").addEventListener("click", function() {
    gsap.to(this, { scale: 1.1, duration: 0.3 });
  
    setTimeout(function() {
      document.getElementById("motoContainer").classList.remove("hidden");
  
      gsap.fromTo("#motoContainer", 
        { x: "-200px" },  // A moto começa fora da tela à esquerda
        { 
          x: "100vw",      // Vai até o outro lado da tela
          duration: 1.5,   // Duração de 1.5 segundos
          ease: "power1.inOut",
          onComplete: function() {
            gsap.fromTo("#motoContainer", 
              { x: "-200px" },  // Reaparece na posição inicial
              { 
                x: "100vw",      // Faz a segunda volta
                duration: 1.5,   // Duração de 1.5 segundos
                ease: "power1.inOut",
                onComplete: function() {
                  gsap.fromTo("#motoContainer", 
                    { x: "-200px" },  // Reaparece na posição inicial
                    { 
                      x: "100vw",      // Faz a terceira volta
                      duration: 1.5,   // Duração de 1.5 segundos
                      ease: "power1.inOut",
                      onComplete: function() {
                        gsap.to("#motoContainer", { opacity: 0, duration: 1, onComplete: function() {
                          document.getElementById("messageContainer").classList.remove("hidden");
                          document.getElementById("messageContainer").classList.add("show");
  
                          // Mostra a mensagem e as motos fazendo manobras
                          gsap.to("#messageContent", { opacity: 1, duration: 1 });
                          gsap.to(".moto", { opacity: 1, duration: 0.5, stagger: 0.3 }); // Motos aparecem em sequência
  
                          // Animação das motos fazendo manobras
                          gsap.to(".manobra1", { x: 100, y: 50, duration: 1, repeat: -1, yoyo: true });
                          gsap.to(".manobra2", { x: -100, y: 50, duration: 1, repeat: -1, yoyo: true });
                          gsap.to(".manobra3", { x: 100, y: -50, duration: 1, repeat: -1, yoyo: true });
                          gsap.to(".manobra4", { x: -100, y: -50, duration: 1, repeat: -1, yoyo: true });
                        }});
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }, 1000); 
  });

  
  /* --------------------------------- */



  window.onload = function() {
    // Seleciona cada moto
    const moto1 = document.getElementById('moto1');
    const moto2 = document.getElementById('moto2');
    const moto3 = document.getElementById('moto3');
  
    // Animação para a Moto 1 (Roda em círculos e se move para a direita)
    gsap.to(moto1, {
        x: -90, // Move-se 300px para a direita
        duration: 2, // Duração de 2 segundos
        ease: "power1.inOut", // Movimento suave
        repeat: -1, // Repete indefinidamente
        yoyo: true // Volta ao ponto inicial após o movimento
      });
  
    // Animação para a Moto 2 (Sobe e desce como se estivesse pulando)
    // Animação para a Moto 2 (Gira enquanto se move para a direita)
    gsap.to(moto2, {
        rotation: 15, // Inclinação de 15 graus
        yoyo: true, // Volta para a posição original
        repeat: -1, // Repete indefinidamente
        duration: 1.5, // Duração de cada ciclo de inclinação
        ease: "power1.inOut" // Movimento suave de inclinação
      });
  
  
    // Animação para a Moto 3 (Movimento em zig-zag enquanto se move para a direita)
    gsap.to(moto3, {
      x: 200, // Move-se para a direita
      duration: 5,
      ease: "power1.inOut",
      repeat: -1, // Repete indefinidamente
      yoyo: true, // Volta após o movimento
      onUpdate: function() {
        // Atualiza a posição Y para criar o zig-zag
        let motoX = gsap.getProperty(moto3, "x"); 
        let zigzagY = Math.sin(motoX / 50) * 50; // Movimento de zig-zag baseado na posição X
        gsap.set(moto3, { y: zigzagY });
      }
    });
  };
  