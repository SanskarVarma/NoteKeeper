import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>SANSKAR VARMA(CSE UNDERGRAD @BITP) ⓒ {year}</p>
      <a class="btn" href="mailto:s.varma2804@email.com">Give Suggestions</a>
    </footer>
  );
}

export default Footer;
