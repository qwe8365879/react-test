import Configuration from './configuration';
import ErrorHandleService from './ErrorHandleService';

export class AlbumService {
  constructor() {
    this.config = new Configuration();
    this.errorHandleService = new ErrorHandleService();
  }

  async getAllAlbums() {
    return fetch(this.config.ALBUM_URL)
      .then(response => {
        if (!response.ok) {
          this.errorHandleService.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.errorHandleService.handleError(error);
      });
  }

  async getAlbum(id) {
    return fetch(this.config.ALBUM_URL+id)
      .then(response => {
        if (!response.ok) {
            this.errorHandleService.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.errorHandleService.handleError(error);
      });
  }

  async createAlbum(newAlbum) {
    return fetch(this.config.ALBUM_URL, {
      method: "POST",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(newAlbum)
    })
      .then(response => {
       if (!response.ok) {
            this.errorHandleService.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.errorHandleService.handleError(error);
      });
  }

  async deleteAlbum(id) {
    return fetch(this.config.ALBUM_URL+id, {
      method: "DELETE",
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
            this.errorHandleService.handleResponseError(response);
        }
      })
      .catch(error => {
        this.errorHandleService.handleError(error);
      });
  }

  async updateAlbum(Album) {
    return fetch(this.config.ALBUM_URL, {
      method: "PUT",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
          },
      body: JSON.stringify(Album)
    })
      .then(response => {
        if (!response.ok) {
          this.errorHandleService.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.errorHandleService.handleError(error);
      });
  }
  
}