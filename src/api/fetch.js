const URL = import.meta.env.VITE_BASE_API_URL

export function destroyReview(id) {
    const options = { method: "DELETE" };
    return fetch(`${URL}/reviews/${id}`, options);
  }

export function addReview(review){
    const options = {
        method: "POST",
        body: JSON.stringify(review),
        headers: { "Content-Type": "application/json" },
    };
    return fetch(`${URL}/reviews`, options).then((response) => {
        return response.json();
    });
}

export function updateReview(review,reviewId){
    const options = {
        method: "PUT",
        body: JSON.stringify(review),
        headers: { "Content-Type": "application/json" },
      };
      return fetch(`${URL}/reviews/${reviewId}`, options).then((response) => {
        return response.json();
      });
}

export function getOneReview(id) {
    return fetch(`${URL}/reviews/${id}`).then((response) => response.json());
}