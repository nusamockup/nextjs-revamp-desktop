function makeStyleTag() {
  const tag = document.createElement("style");
  tag.type = "text/css";
  tag.setAttribute("NsUI-scroll-lock", "");
  return tag;
}

export { makeStyleTag };
//# sourceMappingURL=make-style-tag.js.map
