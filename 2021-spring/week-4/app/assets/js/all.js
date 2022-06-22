const {createApp} = Vue;

const App = {
  data() {

    return {

      features: [
        {
          id: 'feature-1',
          icon: './img/icon-dollar.svg',
          title: '單一價格',
          description: '無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。',
        },
        {
          id: 'feature-2',
          icon: './img/icon-clock.svg',
          title: '20 分鐘即可取件',
          description: '為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。',
        },
        {
          id: 'feature-3',
          icon: './img/icon-heart.svg',
          title: '安心售後服務',
          description: '我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。',
        },
        {
          id: 'feature-4',
          icon: './img/icon-glasses.svg',
          title: '關於鏡片',
          description: '使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。',
        },
      ],

      classicProducts: [
        {
          id: 'product-1',
          img: './img/product-1.png',
          icon: './img/icon-tag.svg',
          text: 'optical',
        },
        {
          id: 'product-2',
          img: './img/product-2.png',
          icon: './img/icon-sun.svg',
          text: 'sunglasses',
        },
        {
          id: 'product-3',
          img: './img/product-3.png',
          icon: './img/icon-thunder.svg',
          text: 'functional',
        },
      ],

      famousProducts: [
        {
          id: 'product-8',
          img: './img/product-8.png',
          text: 'Double A+',
        },
        {
          id: 'product-9',
          img: './img/product-9.png',
          text: 'YOUTH',
        },
      ],

      customers: [
        {
          avatar: './img/rec-1.png',
          name: 'Jessy',
          comment: '眼鏡品質優良，下次還會想來這邊購買！',
          date: '2021/06/20',
        },
        {
          avatar: './img/rec-2.png',
          name: '凱倫',
          comment: '做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！',
          date: '2021/04/18',
        },
        {
          avatar: './img/rec-3.png',
          name: '悠悠',
          comment: '謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！',
          date: '2020/12/25',
        },
        {
          avatar: './img/rec-4.png',
          name: 'Kyuan',
          comment: '服務很好，品質沒有任何問題，非常喜歡。',
          date: '2020/10/31',
        },

      ],

    }
  }
};

createApp(App).mount('body');
