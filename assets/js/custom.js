document.addEventListener("DOMContentLoaded", (event) => {
  const SELECTORS = {
    wrapper: "#content1",
    modal: "#p_modal3",
    buttons: ".survey_button",
    commentsWrapper: ".comments_face",
    submitComment: ".comment_pub",
    textarea: "#textarea",
    templateComment: "#comment0",
  };

  const $wrapper = document.querySelector(SELECTORS.wrapper);
  const $modalink = document.querySelector("#p_modal_button3");
  const $buttons = document.querySelectorAll(SELECTORS.buttons);
  const $commentsWrapper = document.querySelector(SELECTORS.commentsWrapper);
  const $submitComment = document.querySelector(SELECTORS.submitComment);
  const $textarea = document.querySelector(SELECTORS.textarea);
  const $templateComment = document.querySelector(SELECTORS.templateComment);

  const saveAnswear = () => {
    if (!$wrapper) return;

    let answears = [];

    $buttons.forEach((item) => {
      item.addEventListener("click", () => {
        answears.push(item.innerText);
      });
    });

    $modalink.addEventListener("click", (event) => {
      console.log(answears);
      event.preventDefault();
      event.stopPropagation();
    });
  };

  const featComments = () => {
    $submitComment.addEventListener("click", () => {
      const cloneNode = $templateComment.cloneNode(true);
      $commentsWrapper.prepend(cloneNode);

      let id = $commentsWrapper.children.length;
      let commentField = cloneNode.querySelector(".comment-content p + p");
      let nameField = cloneNode.querySelector(".comment-content p ");

      cloneNode.id = `comment-${id}`;
      commentField.innerText = $textarea.value;
      nameField.innerText = "Anonimus";
      const children = $commentsWrapper.children;
      $commentsWrapper.insertBefore(children[0], children[2]);
      $textarea.value = "";
    });
  };

  saveAnswear();
  featComments();
});
