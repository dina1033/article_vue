import http from "../http-common";

class ArticleDataService {
  getAll() {
    return http.get("/articles");
  }

  get(id) {
    return http.get(`/article_id/${id}`);
  }

  create(data) {
    return http.post("/article", data);
  }

  update(id, data) {
    return http.put(`/update_article/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete_article/${id}`);
  }

}

export default new ArticleDataService();