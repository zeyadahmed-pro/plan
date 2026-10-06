const links = {
  resolve: {
    label: "DaVinci Resolve official training",
    url: "https://www.blackmagicdesign.com/products/davinciresolve/training",
  },
  resolveDownload: {
    label: "DaVinci Resolve free download",
    url: "https://www.blackmagicdesign.com/products/davinciresolve/edit/",
  },
  photoshopLearn: {
    label: "Adobe Learn Photoshop",
    url: "https://www.adobe.com/learn/photoshop",
  },
  photoshopTrial: {
    label: "Photoshop 7-day trial",
    url: "https://www.adobe.com/products/photoshop/free-trial-download.html",
  },
  photopea: {
    label: "Photopea free editor",
    url: "https://www.photopea.com/",
  },
  gimp: {
    label: "GIMP free editor",
    url: "https://www.gimp.org/",
  },
  kdenlive: {
    label: "Kdenlive manual",
    url: "https://docs.kdenlive.org/en/getting_started.html",
  },
  blenderManual: {
    label: "Blender manual",
    url: "https://docs.blender.org/manual/en/5.1/index.html",
  },
  blenderAnimation: {
    label: "Blender animation features",
    url: "https://www.blender.org/features/animation/",
  },
  blenderEducation: {
    label: "Blender animation tutorials",
    url: "https://education.blender.org/blender_tutorials/animation/",
  },
  opentoonz: {
    label: "OpenToonz",
    url: "https://opentoonz.github.io/",
  },
  kritaAnimation: {
    label: "Krita animation manual",
    url: "https://docs.krita.org/en/user_manual/animation.html",
  },
  audacity: {
    label: "Audacity",
    url: "https://www.audacityteam.org/",
  },
  pexels: {
    label: "Pexels videos",
    url: "https://www.pexels.com/videos/",
  },
  pexelsImages: {
    label: "Pexels images",
    url: "https://www.pexels.com/",
  },
  unsplash: {
    label: "Unsplash images",
    url: "https://unsplash.com/",
  },
  mixkit: {
    label: "Mixkit assets",
    url: "https://mixkit.co/",
  },
};

const plans = {
  video: [
    {
      focus: "Setup, timeline basics, and clean cuts",
      skill: "Learn the interface, project settings, importing, timeline tracks, razor edits, ripple delete, and exporting.",
      practice: [
        "Install DaVinci Resolve Free or Kdenlive from the official site.",
        "Import 10 short clips and arrange them into a 30 second sequence.",
        "Make 3 versions: slow, medium, and fast pacing.",
        "Export one 1080p file and watch it outside the editor.",
      ],
      project: "A 30 second day-in-the-life or desk setup edit.",
      proof: "You can cut clips without leaving gaps, add music, and export a watchable file.",
      resources: [links.resolveDownload, links.resolve, links.kdenlive],
    },
    {
      focus: "Story, pacing, and shot selection",
      skill: "Build a beginning, middle, and ending. Learn match cuts, action cuts, reaction shots, and when to remove weak footage.",
      practice: [
        "Choose 20 clips and delete half before editing.",
        "Create a 3-part story: setup, change, result.",
        "Practice J-cuts and L-cuts with voice or music.",
        "Write one sentence explaining what the video is about.",
      ],
      project: "A 60 second mini story from your own footage or stock clips.",
      proof: "A viewer can describe the story without you explaining it.",
      resources: [links.resolve, links.pexels],
    },
    {
      focus: "Audio, music, and sound cleanup",
      skill: "Set dialogue levels, avoid clipping, add music under speech, use fades, and layer simple sound effects.",
      practice: [
        "Record a 20 second voiceover.",
        "Lower music during speech and raise it between sentences.",
        "Add 5 sound effects that support actions on screen.",
        "Remove long silence and distracting noise when possible.",
      ],
      project: "A sound-redesigned 45 second clip with voice, music, and effects.",
      proof: "The audio is comfortable on headphones and laptop speakers.",
      resources: [links.audacity, links.mixkit, links.resolve],
    },
    {
      focus: "Titles, subtitles, and social video formats",
      skill: "Make readable titles, lower thirds, captions, safe margins, and 9:16 vertical versions.",
      practice: [
        "Create 3 title styles: clean, energetic, and documentary.",
        "Add subtitles to a 30 second voice clip.",
        "Export the same edit in 16:9 and 9:16.",
        "Check every text layer on a phone-sized preview.",
      ],
      project: "A 60 second tutorial or explanation video with captions.",
      proof: "Text is readable, aligned, and never blocks important visual details.",
      resources: [links.resolve, links.kdenlive],
    },
    {
      focus: "Color correction and basic grading",
      skill: "Fix exposure, contrast, white balance, saturation, and shot matching before adding a creative look.",
      practice: [
        "Correct 5 clips so skin, sky, or neutral objects look natural.",
        "Use scopes if your editor supports them.",
        "Match two shots from different locations.",
        "Create a before/after comparison export.",
      ],
      project: "A 45 second color-corrected scene with before/after shots.",
      proof: "Shots feel like they belong together instead of looking random.",
      resources: [links.resolve],
    },
    {
      focus: "B-roll, structure, and mini documentary editing",
      skill: "Combine A-roll and B-roll, hide cuts, support narration, and build a longer edit without dragging.",
      practice: [
        "Write a 5 line script or outline.",
        "Place A-roll first, then cover weak cuts with B-roll.",
        "Add markers for intro, point 1, point 2, and ending.",
        "Remove any shot that repeats information.",
      ],
      project: "A 2 minute mini documentary, vlog, or school/event recap.",
      proof: "The edit has a clear topic, steady pace, and no empty filler.",
      resources: [links.pexels, links.resolve],
    },
    {
      focus: "Keyframes, speed changes, and motion",
      skill: "Animate position, scale, opacity, speed ramps, punch-ins, and simple picture movement.",
      practice: [
        "Create 5 smooth zooms that start and stop cleanly.",
        "Practice one speed ramp on action footage.",
        "Animate an image using slow pan and scale.",
        "Use motion only when it helps attention.",
      ],
      project: "A high-energy 30 to 45 second sports, gaming, music, or travel edit.",
      proof: "The motion feels intentional, not random or dizzy.",
      resources: [links.resolve, links.kdenlive],
    },
    {
      focus: "Masks, green screen, and simple VFX",
      skill: "Use masks, keying, tracking, and layered clips to create basic visual effects.",
      practice: [
        "Cut out a simple object or person with a mask.",
        "Try a green screen key with clean background footage.",
        "Track a title or label to a moving object if your editor supports it.",
        "Build one split-screen or clone-style effect.",
      ],
      project: "A 20 to 40 second simple VFX scene.",
      proof: "The effect is understandable and the edges are clean enough to publish.",
      resources: [links.resolve],
    },
    {
      focus: "Short-form editing system",
      skill: "Create hooks, fast openings, captions, pattern changes, and platform-ready exports.",
      practice: [
        "Write 5 opening hooks for the same idea.",
        "Edit 3 versions under 30 seconds.",
        "Add captions and one visual change every few seconds.",
        "Export vertical 1080x1920 files.",
      ],
      project: "Three short videos from one idea.",
      proof: "Each short has a clear first second, fast pacing, and clean captions.",
      resources: [links.resolve, links.pexels, links.mixkit],
    },
    {
      focus: "Workflow speed and advanced polish",
      skill: "Use bins, naming, proxies, keyboard shortcuts, multicam basics, and consistent export settings.",
      practice: [
        "Organize footage into A-roll, B-roll, audio, music, graphics, and exports.",
        "Learn 10 keyboard shortcuts you use constantly.",
        "Create a reusable project folder template.",
        "Re-edit an older project in half the time.",
      ],
      project: "A cleaner version of your Week 2 or Week 6 video.",
      proof: "The edit is better and your project files are organized.",
      resources: [links.resolve, links.kdenlive],
    },
    {
      focus: "Final portfolio video",
      skill: "Plan, edit, color, sound, title, and export your best complete video.",
      practice: [
        "Pick your strongest topic before opening the editor.",
        "Make a rough cut, then a fine cut, then a polish pass.",
        "Ask one person what confused them.",
        "Fix the top 3 issues only.",
      ],
      project: "A 2 to 3 minute finished portfolio video.",
      proof: "It shows your editing taste, story sense, sound work, and finishing skills.",
      resources: [links.resolve, links.audacity],
    },
    {
      focus: "Delivery, review, and portfolio packaging",
      skill: "Create export presets, thumbnails, breakdown clips, project backups, and a small portfolio collection.",
      practice: [
        "Export final versions for YouTube-style 16:9 and short-form 9:16.",
        "Make 3 before/after clips showing your improvements.",
        "Write a short caption explaining your role and tools.",
        "Back up project files and media.",
      ],
      project: "A final folder with 3 edited videos and 3 breakdown clips.",
      proof: "Someone can open the folder and understand what you can do.",
      resources: [links.resolveDownload, links.mixkit],
    },
  ],
  photoshop: [
    {
      focus: "Setup, layers, and clean file habits",
      skill: "Learn the workspace, layers, groups, naming, canvas sizes, exports, and the difference between destructive and non-destructive edits.",
      practice: [
        "Open Photoshop, Photopea, or GIMP and create 3 canvas sizes: thumbnail, poster, and square post.",
        "Place 5 images into one document as separate layers.",
        "Rename every layer and organize them into groups.",
        "Export PNG, JPG, and PSD or editable project files.",
      ],
      project: "A simple social media announcement graphic.",
      proof: "Your file is organized, editable, and exported correctly.",
      resources: [links.photoshopLearn, links.photopea, links.gimp],
    },
    {
      focus: "Selections, masks, and background removal",
      skill: "Cut out people and objects cleanly using selections, masks, refine edges, and manual cleanup.",
      practice: [
        "Cut out 5 objects from different backgrounds.",
        "Use a mask instead of erasing pixels.",
        "Place each cutout on a new colored background.",
        "Zoom in and fix messy edges around hair, clothes, and corners.",
      ],
      project: "A poster with a clean subject cutout and bold background.",
      proof: "Edges look clean at full size and the original image remains recoverable.",
      resources: [links.photoshopLearn, links.photopea, links.pexelsImages],
    },
    {
      focus: "Color correction and photo enhancement",
      skill: "Fix exposure, contrast, white balance, saturation, and local details without making images look fake.",
      practice: [
        "Correct 5 dark or flat photos.",
        "Create a before/after layout.",
        "Use adjustment layers or equivalent non-destructive tools.",
        "Keep skin, sky, and shadows natural.",
      ],
      project: "A 6-image before/after photo correction board.",
      proof: "Each edit looks better while still believable.",
      resources: [links.photoshopLearn, links.gimp, links.unsplash],
    },
    {
      focus: "Retouching and cleanup",
      skill: "Remove distractions, fix small imperfections, clean backgrounds, and improve product or portrait images carefully.",
      practice: [
        "Remove 10 small distractions from a photo.",
        "Clean a product photo background.",
        "Retouch lightly without changing the person's real appearance.",
        "Compare subtle versus over-edited results.",
      ],
      project: "A realistic photo cleanup before/after.",
      proof: "The edit is improved but not obviously fake.",
      resources: [links.photoshopLearn, links.photopea],
    },
    {
      focus: "Typography and layout",
      skill: "Use hierarchy, spacing, alignment, type pairing, contrast, and readable text placement.",
      practice: [
        "Design 3 title layouts for the same phrase.",
        "Create a poster using only 2 fonts.",
        "Make desktop and phone versions.",
        "Check text readability at small sizes.",
      ],
      project: "An event poster or school club flyer.",
      proof: "The title, details, and call-to-action are readable in order.",
      resources: [links.photoshopLearn, links.photopea],
    },
    {
      focus: "YouTube thumbnails and attention design",
      skill: "Design thumbnails with clear subjects, readable words, contrast, emotion, and simple composition.",
      practice: [
        "Study 10 thumbnails and write what grabs attention.",
        "Make 3 thumbnail concepts for one video idea.",
        "Limit each thumbnail to 1 subject and 2 to 4 words.",
        "Test at small size to see if it still reads.",
      ],
      project: "A set of 3 thumbnails for one video series.",
      proof: "The thumbnail idea is clear at phone size.",
      resources: [links.photoshopLearn, links.pexelsImages],
    },
    {
      focus: "Social media graphics and carousel design",
      skill: "Create Instagram/TikTok/LinkedIn-style static graphics with consistent style, spacing, and brand colors.",
      practice: [
        "Pick one topic and write 5 short slide headlines.",
        "Create a consistent layout system.",
        "Design cover, content, and ending slides.",
        "Export each slide in order.",
      ],
      project: "A 5-slide educational carousel.",
      proof: "The carousel feels consistent and easy to read.",
      resources: [links.photopea, links.gimp, links.unsplash],
    },
    {
      focus: "Compositing and realistic image blends",
      skill: "Combine images with matching light, shadow, color, scale, perspective, and grain.",
      practice: [
        "Place a subject into a new background.",
        "Add contact shadows and color matching.",
        "Match sharpness and noise between images.",
        "Create one unrealistic version and one realistic version to compare.",
      ],
      project: "A movie-poster-style composite.",
      proof: "The subject looks like it belongs in the scene.",
      resources: [links.photoshopLearn, links.pexelsImages, links.unsplash],
    },
    {
      focus: "Brand kit and visual consistency",
      skill: "Create repeatable colors, type styles, logo usage, image treatment, and templates.",
      practice: [
        "Choose a fake brand or personal channel name.",
        "Pick 3 colors and 2 fonts.",
        "Design profile image, banner, post template, and thumbnail template.",
        "Create a one-page mini style guide.",
      ],
      project: "A mini brand kit for a channel or small business.",
      proof: "All pieces feel like they came from the same creator.",
      resources: [links.photopea, links.gimp],
    },
    {
      focus: "Design for video editors",
      skill: "Make assets that support editing: lower thirds, title cards, end screens, overlays, frames, and transparent PNGs.",
      practice: [
        "Create 3 lower-third name graphics.",
        "Create a title card and end screen.",
        "Export transparent PNG assets.",
        "Import them into your video editor and test readability.",
      ],
      project: "A graphics pack for one video project.",
      proof: "The graphics work cleanly inside an edit.",
      resources: [links.resolveDownload, links.photoshopLearn, links.photopea],
    },
    {
      focus: "Final design portfolio project",
      skill: "Plan and finish a small campaign with multiple useful design pieces.",
      practice: [
        "Choose one theme: event, channel, product, school club, or personal brand.",
        "Create a thumbnail, poster, square post, story post, and banner.",
        "Make a before/after process image.",
        "Ask one person what looks unclear and fix it.",
      ],
      project: "A 5-piece campaign design set.",
      proof: "The set has one clear style and could be used for a real project.",
      resources: [links.photoshopLearn, links.pexelsImages],
    },
    {
      focus: "Portfolio packaging and job readiness",
      skill: "Prepare images, mockups, captions, and a simple portfolio order that shows your strongest work first.",
      practice: [
        "Pick your best 6 to 8 design pieces.",
        "Export clean web versions.",
        "Write one sentence for each piece explaining the goal.",
        "Make a simple PDF or web page portfolio layout.",
      ],
      project: "A Photoshop/design portfolio folder.",
      proof: "Someone can understand your design skills in under 60 seconds.",
      resources: [links.photoshopLearn, links.photopea, links.gimp],
    },
  ],
  animation: [
    {
      focus: "Setup, interface, and first motion",
      skill: "Choose Blender for 3D/2D Grease Pencil, or Krita/OpenToonz for drawn 2D. Learn timeline, playback, keyframes, and rendering.",
      practice: [
        "Install your main animation tool from the official page.",
        "Create a 24 frame scene with one moving shape.",
        "Render a 3 second test.",
        "Save versions instead of overwriting one file.",
      ],
      project: "A simple object moving across the screen with a clean export.",
      proof: "You understand timeline frames, playback, and basic rendering.",
      resources: [links.blenderManual, links.blenderEducation, links.opentoonz, links.kritaAnimation],
    },
    {
      focus: "Timing, spacing, and the bouncing ball",
      skill: "Learn why motion feels heavy, light, fast, slow, sharp, or soft.",
      practice: [
        "Animate a bouncing ball in 24 frames.",
        "Make 3 versions: heavy ball, rubber ball, floating ball.",
        "Add squash and stretch only where it improves the motion.",
        "Compare linear movement with eased movement.",
      ],
      project: "A bouncing ball study sheet with 3 different personalities.",
      proof: "The viewer can tell which ball is heavy or light.",
      resources: [links.blenderAnimation, links.blenderEducation],
    },
    {
      focus: "Graph editor, arcs, and clean motion",
      skill: "Use curves, easing, arcs, and motion paths to remove robotic movement.",
      practice: [
        "Animate a cube or drawn object jumping in an arc.",
        "Adjust ease-in and ease-out until the motion feels natural.",
        "Add overshoot and settle on one movement.",
        "Render a side-by-side linear versus polished version.",
      ],
      project: "A 5 second object animation with clear arcs.",
      proof: "The motion accelerates, slows, and lands cleanly.",
      resources: [links.blenderManual, links.blenderAnimation],
    },
    {
      focus: "Core animation principles",
      skill: "Practice anticipation, follow-through, staging, exaggeration, appeal, and clear silhouettes.",
      practice: [
        "Animate a simple object preparing before it moves.",
        "Add follow-through after it stops.",
        "Make 5 readable silhouette poses.",
        "Remove details that do not help the action.",
      ],
      project: "A 6 to 8 second object-with-personality animation.",
      proof: "The action reads even if the object is only a simple shape.",
      resources: [links.blenderEducation],
    },
    {
      focus: "Character design, posing, and scene basics",
      skill: "Create a simple character or shape-rig that can pose clearly without complex modeling.",
      practice: [
        "Design a simple character from basic shapes.",
        "Create 10 poses: happy, tired, surprised, sneaky, confident, scared, waiting, running, falling, celebrating.",
        "Check each pose as a black silhouette.",
        "Build one simple background.",
      ],
      project: "A pose sheet and simple stage for your character.",
      proof: "The pose communicates an emotion before any movement happens.",
      resources: [links.blenderManual, links.kritaAnimation, links.opentoonz],
    },
    {
      focus: "Rigging or cutout animation",
      skill: "Use armatures, parenting, shape keys, or 2D puppet pieces to make a character controllable.",
      practice: [
        "Create a simple body with separate head, body, arms, and legs.",
        "Rig or parent the parts so they move together.",
        "Test 5 poses using the rig.",
        "Fix bends that look broken.",
      ],
      project: "A basic rigged or puppet character ready for animation.",
      proof: "You can pose the character without rebuilding it each frame.",
      resources: [links.blenderManual, links.blenderAnimation, links.opentoonz],
    },
    {
      focus: "Walk cycle or looping motion",
      skill: "Animate contact, down, passing, and up poses, then make the loop feel steady.",
      practice: [
        "Block the main walk poses first.",
        "Animate only legs, then hips/body, then arms.",
        "Loop the walk for at least 4 cycles.",
        "Create one normal walk and one character walk.",
      ],
      project: "A 2 to 4 second looping walk cycle.",
      proof: "The loop does not pop, slide, or change speed strangely.",
      resources: [links.blenderEducation, links.blenderAnimation],
    },
    {
      focus: "Camera, staging, lighting, and backgrounds",
      skill: "Frame action clearly, guide attention, and make the scene readable without overbuilding it.",
      practice: [
        "Create 3 camera angles for the same action.",
        "Add a simple background that supports the story.",
        "Use light and contrast to guide the eye.",
        "Render the same shot as wide, medium, and close-up.",
      ],
      project: "A 10 second staged scene with camera movement or cuts.",
      proof: "The viewer knows where to look in every shot.",
      resources: [links.blenderManual, links.blenderEducation],
    },
    {
      focus: "Acting, expression, and lip sync basics",
      skill: "Animate emotion through eyes, brows, mouth shapes, timing, and body language.",
      practice: [
        "Animate 5 expression changes.",
        "Choose a short line of dialogue under 5 seconds.",
        "Block the emotion first, then add mouth shapes.",
        "Keep the body acting clear even without audio.",
      ],
      project: "A 5 to 8 second acting or lip-sync shot.",
      proof: "The emotion is understandable before the dialogue finishes.",
      resources: [links.blenderAnimation, links.kritaAnimation],
    },
    {
      focus: "Storyboard and animatic",
      skill: "Plan a tiny story before spending time polishing animation.",
      practice: [
        "Write a one sentence story.",
        "Draw 8 to 12 storyboard panels.",
        "Turn panels into an animatic with temporary sound.",
        "Cut anything that is not needed.",
      ],
      project: "A 20 to 30 second animatic for your final short.",
      proof: "The story works as rough drawings or simple blocked shots.",
      resources: [links.blenderEducation, links.audacity],
    },
    {
      focus: "Final animation production",
      skill: "Block, spline, polish, render, and organize shots across a full short.",
      practice: [
        "Split the short into shots.",
        "Finish all rough motion before polishing.",
        "Polish the most important shot first.",
        "Render daily previews so problems show up early.",
      ],
      project: "A complete rough-to-polished 20 to 30 second animated short.",
      proof: "Every shot exists, the timing works, and the story is complete.",
      resources: [links.blenderManual, links.opentoonz, links.kritaAnimation],
    },
    {
      focus: "Sound, edit, render, and portfolio package",
      skill: "Add sound, final timing, titles, credits, export settings, and a breakdown reel.",
      practice: [
        "Add music or sound effects that match actions.",
        "Edit your shots together in DaVinci Resolve, Kdenlive, or Blender's video editor.",
        "Export a final version and a breakdown version.",
        "Write what you animated, what tool you used, and what you learned.",
      ],
      project: "One finished animated short plus 3 process clips.",
      proof: "Your animation can be shown without extra explanation.",
      resources: [links.audacity, links.mixkit, links.resolveDownload],
    },
  ],
};

const state = {
  track: "video",
  completed: JSON.parse(localStorage.getItem("creative-plan-completed") || "{}"),
};

const cards = document.querySelector("#plan-cards");
const progressLabel = document.querySelector("#progress-label");
const progressFill = document.querySelector("#progress-fill");
const trackName = document.querySelector("#track-name");
const buttons = document.querySelectorAll(".track-button");

function completeKey(track, index) {
  return `${track}-${index + 1}`;
}

function saveProgress() {
  localStorage.setItem("creative-plan-completed", JSON.stringify(state.completed));
}

function renderPlan() {
  const current = plans[state.track];
  const completeCount = current.filter((_, index) => state.completed[completeKey(state.track, index)]).length;
  const percent = Math.round((completeCount / current.length) * 100);

  const trackLabels = {
    video: "Video editing roadmap",
    photoshop: "Photoshop and design roadmap",
    animation: "Animation roadmap",
  };
  const shortLabels = {
    video: "Video",
    photoshop: "Photoshop",
    animation: "Animation",
  };

  trackName.textContent = trackLabels[state.track];
  progressLabel.textContent = `${completeCount} of ${current.length} weeks complete`;
  progressFill.style.width = `${percent}%`;

  cards.innerHTML = current
    .map((week, index) => {
      const key = completeKey(state.track, index);
      const checked = state.completed[key] ? "checked" : "";
      const cardClass =
        state.track === "animation"
          ? "week-card animation-card"
          : state.track === "photoshop"
            ? "week-card photoshop-card"
            : "week-card";
      const resourceLinks = week.resources
        .map(
          (resource) =>
            `<a href="${resource.url}" target="_blank" rel="noreferrer">${resource.label}</a>`
        )
        .join("");
      const tasks = week.practice.map((item) => `<li>${item}</li>`).join("");

      return `
        <article class="${cardClass}">
          <div class="week-kicker">
            <span>Week ${index + 1}</span>
            <span>${shortLabels[state.track]}</span>
          </div>
          <h3>${week.focus}</h3>
          <p>${week.skill}</p>
          <label class="check-row">
            <input type="checkbox" data-week="${index}" ${checked} />
            Mark week complete
          </label>
          <details>
            <summary>Show tasks and links</summary>
            <div class="detail-list">
              <div>
                <h4>Practice checklist</h4>
                <ul>${tasks}</ul>
              </div>
              <div>
                <h4>Weekend project</h4>
                <p>${week.project}</p>
              </div>
              <div>
                <h4>Proof of done</h4>
                <p>${week.proof}</p>
              </div>
              <div>
                <h4>Useful links</h4>
                <div class="week-links">${resourceLinks}</div>
              </div>
            </div>
          </details>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-week]").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const index = Number(event.currentTarget.dataset.week);
      const key = completeKey(state.track, index);
      state.completed[key] = event.currentTarget.checked;
      saveProgress();
      renderPlan();
    });
  });

  buttons.forEach((button) => {
    const active = button.dataset.track === state.track;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

buttons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  button.addEventListener("click", () => {
    state.track = button.dataset.track;
    renderPlan();
  });
});

renderPlan();

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
