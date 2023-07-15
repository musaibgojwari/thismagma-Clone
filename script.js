
  function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  };
  
  loco();
  
  var clutter = "";
  
  document.querySelector("#page2>h1").textContent.split(" ").forEach((dets) =>  {
    clutter += `<span> ${dets} </span>`;
    
      document.querySelector("#page2>h1").innerHTML = clutter;
    })
  
    gsap.to("#page2>h1>span", {
      scrollTrigger: {
        trigger: `#page2>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: .5,
        // markers: true,
      },
      stagger: .2,
      color: `#fff`,
      duration: 2
    })

    var clutter = ""

    document.querySelector("#page4>h1").textContent.split(" ").forEach((dets) =>  {
      clutter += `<span> ${dets} </span>`;
      
        document.querySelector("#page4>h1").innerHTML = clutter;
      })
    
      gsap.to("#page4>h1>span", {
        scrollTrigger: {
          trigger: `#page4>h1>span`,
          start: `top bottom`,
          end: `bottom top`,
          scroller: `#main`,
          scrub: .5,
          // markers: true,
        },
        stagger: .2,
        color: `#fff`,
        duration: 2
      })

    
  
  // canvas function
  function can_vas1() {
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
  
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
  
    function files(index) {
      var data = `./Magma-main/frames00007.png
      ./Magma-main/frames00010.png
      ./Magma-main/frames00013.png
      ./Magma-main/frames00016.png
      ./Magma-main/frames00019.png
      ./Magma-main/frames00022.png
      ./Magma-main/frames00025.png
      ./Magma-main/frames00028.png
      ./Magma-main/frames00031.png
      ./Magma-main/frames00034.png
      ./Magma-main/frames00037.png
      ./Magma-main/frames00040.png
      ./Magma-main/frames00043.png
      ./Magma-main/frames00046.png
      ./Magma-main/frames00049.png
      ./Magma-main/frames00052.png
      ./Magma-main/frames00055.png
      ./Magma-main/frames00058.png
      ./Magma-main/frames00061.png
      ./Magma-main/frames00064.png
      ./Magma-main/frames00067.png
      ./Magma-main/frames00070.png
      ./Magma-main/frames00073.png
      ./Magma-main/frames00076.png
      ./Magma-main/frames00079.png
      ./Magma-main/frames00082.png
      ./Magma-main/frames00085.png
      ./Magma-main/frames00088.png
      ./Magma-main/frames00091.png
      ./Magma-main/frames00094.png
      ./Magma-main/frames00097.png
      ./Magma-main/frames00100.png
      ./Magma-main/frames00103.png
      ./Magma-main/frames00106.png
      ./Magma-main/frames00109.png
      ./Magma-main/frames00112.png
      ./Magma-main/frames00115.png
      ./Magma-main/frames00118.png
      ./Magma-main/frames00121.png
      ./Magma-main/frames00124.png
      ./Magma-main/frames00127.png
      ./Magma-main/frames00130.png
      ./Magma-main/frames00133.png
      ./Magma-main/frames00136.png
      ./Magma-main/frames00139.png
      ./Magma-main/frames00142.png
      ./Magma-main/frames00145.png
      ./Magma-main/frames00148.png
      ./Magma-main/frames00151.png
      ./Magma-main/frames00154.png
      ./Magma-main/frames00157.png
      ./Magma-main/frames00160.png
      ./Magma-main/frames00163.png
      ./Magma-main/frames00166.png
      ./Magma-main/frames00169.png
      ./Magma-main/frames00172.png
      ./Magma-main/frames00175.png
      ./Magma-main/frames00178.png
      ./Magma-main/frames00181.png
      ./Magma-main/frames00184.png
      ./Magma-main/frames00187.png
      ./Magma-main/frames00190.png
      ./Magma-main/frames00193.png
      ./Magma-main/frames00196.png
      ./Magma-main/frames00199.png
      ./Magma-main/frames00202.png
      `;
      return data.split("\n")[index];
    }
  
    const frameCount = 66;
  
    const images = [];
    const imageSeq = {
      frame: 1,
    };
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page3`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
  
    images[1].onload = render;
  
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: `#page3`,
      pin: true,
      // markers:true,
      scroller: `#main`,
      start: `top top`,
      end: `600% top`,
    });
  }
  
function can_vas2() {
    const can = document.querySelector("#page5>canvas");
    const con = can.getContext("2d");
  
    can.width = window.innerWidth;
    can.height = window.innerHeight;
  
  
    window.addEventListener("resize", function () {
      can.width = window.innerWidth;
      can.height = window.innerHeight;
      render();
    });
  
    function files(index) {
      var data = `./Magma-main/bridges00004.png
      ./Magma-main/bridges00007.png
      ./Magma-main/bridges00010.png
      ./Magma-main/bridges00013.png
      ./Magma-main/bridges00016.png
      ./Magma-main/bridges00019.png
      ./Magma-main/bridges00022.png
      ./Magma-main/bridges00025.png
      ./Magma-main/bridges00028.png
      ./Magma-main/bridges00031.png
      ./Magma-main/bridges00034.png
      ./Magma-main/bridges00037.png
      ./Magma-main/bridges00040.png
      ./Magma-main/bridges00043.png
      ./Magma-main/bridges00046.png
      ./Magma-main/bridges00049.png
      ./Magma-main/bridges00052.png
      ./Magma-main/bridges00055.png
      ./Magma-main/bridges00058.png
      ./Magma-main/bridges00061.png
      ./Magma-main/bridges00064.png
      ./Magma-main/bridges00067.png
      ./Magma-main/bridges00070.png
      ./Magma-main/bridges00073.png
      ./Magma-main/bridges00076.png
      ./Magma-main/bridges00079.png
      ./Magma-main/bridges00082.png
      ./Magma-main/bridges00085.png
      ./Magma-main/bridges00088.png
      ./Magma-main/bridges00091.png
      ./Magma-main/bridges00094.png
      ./Magma-main/bridges00097.png
      ./Magma-main/bridges00100.png
      ./Magma-main/bridges00103.png
      ./Magma-main/bridges00106.png
      ./Magma-main/bridges00109.png
      ./Magma-main/bridges00112.png
      ./Magma-main/bridges00115.png
      ./Magma-main/bridges00118.png
      ./Magma-main/bridges00121.png
      ./Magma-main/bridges00124.png
      ./Magma-main/bridges00127.png
      ./Magma-main/bridges00130.png
      ./Magma-main/bridges00133.png
      ./Magma-main/bridges00136.png
      ./Magma-main/bridges00139.png
      ./Magma-main/bridges00142.png
      ./Magma-main/bridges00145.png
      ./Magma-main/bridges00148.png
      ./Magma-main/bridges00151.png
      ./Magma-main/bridges00154.png
      ./Magma-main/bridges00157.png
      ./Magma-main/bridges00160.png
      ./Magma-main/bridges00163.png
      `;
      return data.split("\n")[index];
    }
  
    const count = 54;
  
    const magma = [];
    const magmaSeq = {
      frame: 1,
    };
  
    for (let i = 0; i < count; i++) {
      const img = new Image();
      img.src = files(i);
      magma.push(img);
    }
  
    gsap.to(magmaSeq, {
      frame: count - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page5`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
  
    magma[1].onload = render;
  
    function render() {
      scaleImage(magma[magmaSeq.frame], con);
    }
  
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: `#page5`,
      pin: true,
      // markers:true,
      scroller: `#main`,
      start: `top top`,
      end: `600% top`,
    });
}

function can_vas3() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `https://thisismagma.com/assets/home/lore/seq/1.webp
    https://thisismagma.com/assets/home/lore/seq/2.webp
    https://thisismagma.com/assets/home/lore/seq/3.webp
    https://thisismagma.com/assets/home/lore/seq/4.webp
    https://thisismagma.com/assets/home/lore/seq/5.webp
    https://thisismagma.com/assets/home/lore/seq/6.webp
    https://thisismagma.com/assets/home/lore/seq/7.webp
    https://thisismagma.com/assets/home/lore/seq/8.webp
    https://thisismagma.com/assets/home/lore/seq/9.webp
    https://thisismagma.com/assets/home/lore/seq/10.webp
    https://thisismagma.com/assets/home/lore/seq/11.webp
    https://thisismagma.com/assets/home/lore/seq/12.webp
    https://thisismagma.com/assets/home/lore/seq/13.webp
    https://thisismagma.com/assets/home/lore/seq/14.webp
    https://thisismagma.com/assets/home/lore/seq/15.webp
    https://thisismagma.com/assets/home/lore/seq/16.webp
    https://thisismagma.com/assets/home/lore/seq/17.webp
    https://thisismagma.com/assets/home/lore/seq/18.webp
    https://thisismagma.com/assets/home/lore/seq/19.webp
    https://thisismagma.com/assets/home/lore/seq/20.webp
    https://thisismagma.com/assets/home/lore/seq/21.webp
    https://thisismagma.com/assets/home/lore/seq/22.webp
    https://thisismagma.com/assets/home/lore/seq/23.webp
    https://thisismagma.com/assets/home/lore/seq/24.webp
    https://thisismagma.com/assets/home/lore/seq/25.webp
    https://thisismagma.com/assets/home/lore/seq/26.webp
    https://thisismagma.com/assets/home/lore/seq/27.webp
    https://thisismagma.com/assets/home/lore/seq/28.webp
    https://thisismagma.com/assets/home/lore/seq/29.webp
    https://thisismagma.com/assets/home/lore/seq/30.webp
    https://thisismagma.com/assets/home/lore/seq/31.webp
    https://thisismagma.com/assets/home/lore/seq/32.webp
    https://thisismagma.com/assets/home/lore/seq/33.webp
    https://thisismagma.com/assets/home/lore/seq/34.webp
    https://thisismagma.com/assets/home/lore/seq/35.webp
    https://thisismagma.com/assets/home/lore/seq/36.webp
    https://thisismagma.com/assets/home/lore/seq/37.webp
    https://thisismagma.com/assets/home/lore/seq/38.webp
    https://thisismagma.com/assets/home/lore/seq/39.webp
    https://thisismagma.com/assets/home/lore/seq/40.webp
    https://thisismagma.com/assets/home/lore/seq/41.webp
    https://thisismagma.com/assets/home/lore/seq/42.webp
    https://thisismagma.com/assets/home/lore/seq/43.webp
    https://thisismagma.com/assets/home/lore/seq/44.webp
    https://thisismagma.com/assets/home/lore/seq/45.webp
    https://thisismagma.com/assets/home/lore/seq/46.webp
    https://thisismagma.com/assets/home/lore/seq/47.webp
    https://thisismagma.com/assets/home/lore/seq/48.webp
    https://thisismagma.com/assets/home/lore/seq/49.webp
    https://thisismagma.com/assets/home/lore/seq/50.webp
    https://thisismagma.com/assets/home/lore/seq/51.webp
    https://thisismagma.com/assets/home/lore/seq/52.webp
    https://thisismagma.com/assets/home/lore/seq/53.webp
    https://thisismagma.com/assets/home/lore/seq/54.webp
    https://thisismagma.com/assets/home/lore/seq/55.webp
    https://thisismagma.com/assets/home/lore/seq/56.webp
    https://thisismagma.com/assets/home/lore/seq/57.webp
    https://thisismagma.com/assets/home/lore/seq/58.webp
    https://thisismagma.com/assets/home/lore/seq/59.webp
    https://thisismagma.com/assets/home/lore/seq/60.webp
    https://thisismagma.com/assets/home/lore/seq/61.webp
    https://thisismagma.com/assets/home/lore/seq/62.webp
    https://thisismagma.com/assets/home/lore/seq/63.webp
    https://thisismagma.com/assets/home/lore/seq/64.webp
    https://thisismagma.com/assets/home/lore/seq/65.webp
    https://thisismagma.com/assets/home/lore/seq/66.webp
    https://thisismagma.com/assets/home/lore/seq/67.webp
    https://thisismagma.com/assets/home/lore/seq/68.webp
    https://thisismagma.com/assets/home/lore/seq/69.webp
    https://thisismagma.com/assets/home/lore/seq/70.webp
    https://thisismagma.com/assets/home/lore/seq/71.webp
    https://thisismagma.com/assets/home/lore/seq/72.webp
    https://thisismagma.com/assets/home/lore/seq/73.webp
    https://thisismagma.com/assets/home/lore/seq/74.webp
    https://thisismagma.com/assets/home/lore/seq/75.webp
    https://thisismagma.com/assets/home/lore/seq/76.webp
    https://thisismagma.com/assets/home/lore/seq/77.webp
    https://thisismagma.com/assets/home/lore/seq/78.webp
    https://thisismagma.com/assets/home/lore/seq/79.webp
    https://thisismagma.com/assets/home/lore/seq/80.webp
    https://thisismagma.com/assets/home/lore/seq/81.webp
    https://thisismagma.com/assets/home/lore/seq/82.webp
    https://thisismagma.com/assets/home/lore/seq/83.webp
    https://thisismagma.com/assets/home/lore/seq/84.webp
    https://thisismagma.com/assets/home/lore/seq/85.webp
    https://thisismagma.com/assets/home/lore/seq/86.webp
    https://thisismagma.com/assets/home/lore/seq/87.webp
    https://thisismagma.com/assets/home/lore/seq/88.webp
    https://thisismagma.com/assets/home/lore/seq/89.webp
    https://thisismagma.com/assets/home/lore/seq/90.webp
    https://thisismagma.com/assets/home/lore/seq/91.webp
    https://thisismagma.com/assets/home/lore/seq/92.webp
    https://thisismagma.com/assets/home/lore/seq/93.webp
    https://thisismagma.com/assets/home/lore/seq/94.webp
    https://thisismagma.com/assets/home/lore/seq/95.webp
    https://thisismagma.com/assets/home/lore/seq/96.webp
    https://thisismagma.com/assets/home/lore/seq/97.webp
    https://thisismagma.com/assets/home/lore/seq/98.webp
    https://thisismagma.com/assets/home/lore/seq/99.webp
    https://thisismagma.com/assets/home/lore/seq/100.webp
    https://thisismagma.com/assets/home/lore/seq/101.webp
    https://thisismagma.com/assets/home/lore/seq/102.webp
    https://thisismagma.com/assets/home/lore/seq/103.webp
    https://thisismagma.com/assets/home/lore/seq/104.webp
    https://thisismagma.com/assets/home/lore/seq/105.webp
    https://thisismagma.com/assets/home/lore/seq/106.webp
    https://thisismagma.com/assets/home/lore/seq/107.webp
    https://thisismagma.com/assets/home/lore/seq/108.webp
    https://thisismagma.com/assets/home/lore/seq/109.webp
    https://thisismagma.com/assets/home/lore/seq/110.webp
    https://thisismagma.com/assets/home/lore/seq/111.webp
    https://thisismagma.com/assets/home/lore/seq/112.webp
    https://thisismagma.com/assets/home/lore/seq/113.webp
    https://thisismagma.com/assets/home/lore/seq/114.webp
    https://thisismagma.com/assets/home/lore/seq/115.webp
    https://thisismagma.com/assets/home/lore/seq/116.webp
    https://thisismagma.com/assets/home/lore/seq/117.webp
    https://thisismagma.com/assets/home/lore/seq/118.webp
    https://thisismagma.com/assets/home/lore/seq/119.webp
    https://thisismagma.com/assets/home/lore/seq/120.webp
    https://thisismagma.com/assets/home/lore/seq/121.webp
    https://thisismagma.com/assets/home/lore/seq/122.webp
    https://thisismagma.com/assets/home/lore/seq/123.webp
    https://thisismagma.com/assets/home/lore/seq/124.webp
    https://thisismagma.com/assets/home/lore/seq/125.webp
    https://thisismagma.com/assets/home/lore/seq/126.webp
    https://thisismagma.com/assets/home/lore/seq/127.webp
    https://thisismagma.com/assets/home/lore/seq/128.webp
    https://thisismagma.com/assets/home/lore/seq/129.webp
    https://thisismagma.com/assets/home/lore/seq/130.webp
    https://thisismagma.com/assets/home/lore/seq/131.webp
    https://thisismagma.com/assets/home/lore/seq/132.webp
    https://thisismagma.com/assets/home/lore/seq/133.webp
    https://thisismagma.com/assets/home/lore/seq/134.webp
    https://thisismagma.com/assets/home/lore/seq/135.webp
    https://thisismagma.com/assets/home/lore/seq/136.webp`;
    return data.split("\n")[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page7`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page7",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
}

can_vas1();
can_vas2();
can_vas3();


gsap.to(".page7-cir", {
  scrollTrigger: {
    trigger: '.page7-cir',
    start: `top center`,
    end: `bottom top`,
    scrub: .5,
    scroller: `#main`
  },
  scale: 1.5,
})

gsap.to(".page7-cir-inner", {
  scrollTrigger: {
    trigger: '.page7-cir-inner',
    start: `top center`,
    end: `bottom top`,
    scrub: .5,
    scroller: `#main`
  },
  backgroundColor: `#0a3bce91`
})