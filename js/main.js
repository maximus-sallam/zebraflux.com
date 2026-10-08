// ZebraFlux, Inc. — site behavior
(function () {
  // footer year
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // close mobile nav on link tap
  document.querySelectorAll(".nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.querySelector(".nav").classList.remove("open");
    });
  });

  // contact form -> mailto (static hosting: no backend)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("cf-status");
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var org = document.getElementById("cf-org").value.trim();
      var type = document.getElementById("cf-type").value;
      var msg = document.getElementById("cf-msg").value.trim();
      if (!name || !email || !msg) {
        status.textContent = "Please complete the required fields (name, email, message).";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "That email address does not look valid.";
        return;
      }
      var subject = encodeURIComponent("[zebraflux.com] " + type + " — " + name);
      var body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email +
        (org ? "\nOrganization: " + org : "") +
        "\nInquiry type: " + type + "\n\n" + msg
      );
      status.textContent = "Opening your email client to send the message…";
      window.location.href = "mailto:zmax@zebraflux.com?subject=" + subject + "&body=" + body;
    });
  }
})();
