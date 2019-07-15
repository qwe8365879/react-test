import Configuration from './configuration';
import ErrorHandleService from './ErrorHandleService';

export class PhotoService {
  constructor() {
    this.config = new Configuration();
    this.errorHandleService = new ErrorHandleService();
  }

  async getAllPhotos() {
    return fetch(this.config.PHOTO_URL)
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

  async getPhoto(id) {
    return fetch(this.config.PHOTO_URL+id)
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

  async getPhotoByAlbum(albumId) {
    return fetch(this.config.ALBUM_URL+albumId+"/photos")
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

  async createPhoto(newPhoto) {
    return fetch(this.config.PHOTO_URL, {
      method: "POST",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
        },
      body: JSON.stringify(newPhoto)
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

  async deletePhoto(id) {
    return fetch(this.config.PHOTO_URL+id, {
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

  async updatePhoto(photo) {
    return fetch(this.config.PHOTO_URL, {
      method: "PUT",
      mode: "cors",
      headers: {
            "Content-Type": "application/json"
          },
      body: JSON.stringify(photo)
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