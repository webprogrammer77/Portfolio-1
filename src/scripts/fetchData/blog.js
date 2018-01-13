import { fetchArticles } from './api';
import { makeErrorMessage } from '../errorMessage';

class Articles {
  init() {
    return fetchArticles()
      .then((data) => {
        const blog = document.getElementById('blog');
        const menu = document.getElementById('menu');

        blog.innerHTML = data.articles;
        menu.innerHTML = data.contentList;
      })
      .catch((e) => {
        const mainSection = document.getElementById('mainSection');
        const errorMessage = `При получении данных с сервера возникла ошибка. ${e.message} Уверяю вас, я уже работаю над этим.`;
        const error = makeErrorMessage(errorMessage);

        mainSection.appendChild(error);
      })
  }
}

export default Articles;