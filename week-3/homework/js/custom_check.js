// web_components 參考資料 : http://www.ruanyifeng.com/blog/2019/08/web_components.html
document.addEventListener('DOMContentLoaded', (event) => {

  function copyAttrs(target, source) {
    [...source.attributes].forEach(attr => {
      target.setAttribute(attr.nodeName, attr.nodeValue)
    })
  }

  const makeCheckbox = (target, templateId) => {
    // const shadow = target.attachShadow({mode: 'closed'});

    const templateElem = document.getElementById(templateId);
    const content = templateElem.content.cloneNode(true);
    content.querySelector('font').innerText = target.getAttribute('text');

    if (target.getAttribute('check-style'))
      content.querySelector('.checkmark').setAttribute('style', target.getAttribute('check-style'));

    if (target.getAttribute('font-style'))
      content.querySelector('font').setAttribute('style', target.getAttribute('font-style'));

    copyAttrs(content.querySelector('input[type="checkbox"]'), target);
    target.appendChild(content);
    // shadow.appendChild(content);
  }

  const renderGreenCheck = () => {

    const html = `
    <template id="green-check">
      <label class="check-wrap">
        <font></font>
        <input type="checkbox">
        <span class="checkmark"></span>
      </label>
    </template>
  `

    // 將 green-circle-check 的基礎框 append 到 body 最後面
    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    class GreenCheck extends HTMLElement {
      constructor() {
        super();
        makeCheckbox(this, 'green-check');
      }
    }

    window.customElements.define('green-check', GreenCheck);
  };

  renderGreenCheck();
});
