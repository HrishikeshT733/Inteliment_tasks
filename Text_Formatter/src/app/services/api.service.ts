// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private baseUrl = 'https://jsonplaceholder.typicode.com';

//   constructor(private http: HttpClient) { }

//   // GET request - Fetch user by ID
//   getUserById(userId: number): Observable<any> {
//     const url = `${this.baseUrl}/users/${userId}`;
//     return this.http.get(url).pipe(
//       retry(1),
//       catchError(this.handleError)
//     );
//   }

//   // GET request - Fetch user posts
//   getUserPosts(userId: number): Observable<any> {
//     const url = `${this.baseUrl}/posts?userId=${userId}`;
//     return this.http.get(url).pipe(
//       retry(1),
//       catchError(this.handleError)
//     );
//   }

//   // GET request - Fetch photos
//   getPhotos(): Observable<any> {
//     const url = `${this.baseUrl}/photos`;
//     return this.http.get(url).pipe(
//       retry(1),
//       catchError(this.handleError)
//     );
//   }

//   // GET request - Fetch specific photo by ID
//   getPhotoById(photoId: number): Observable<any> {
//     const url = `${this.baseUrl}/photos/${photoId}`;
//     return this.http.get(url).pipe(
//       retry(1),
//       catchError(this.handleError)
//     );
//   }

//   // POST request - Create new user/post
//   createPost(data: any): Observable<any> {
//     const url = `${this.baseUrl}/posts`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return this.http.post(url, data, { headers }).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // PUT request - Update existing user/post
//   updatePost(userId: number, data: any): Observable<any> {
//     const url = `${this.baseUrl}/posts/${userId}`;
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return this.http.put(url, data, { headers }).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // DELETE request - Delete user/post
//   deletePost(userId: number): Observable<any> {
//     const url = `${this.baseUrl}/posts/${userId}`;
//     return this.http.delete(url).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // GET request with parameters
//   getUserWithParams(userId: number): Observable<any> {
//     const params = new HttpParams().set('userId', userId.toString());
//     return this.http.get(`${this.baseUrl}/posts`, { params }).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // Error handling
//   private handleError(error: any) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Client-side error
//       errorMessage = `Client Error: ${error.error.message}`;
//     } else {
//       // Server-side error
//       errorMessage = `Server Error: Status ${error.status}, Message: ${error.message}`;
//     }
//     console.error(errorMessage);
//     return throwError(() => new Error(errorMessage));
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // GET - Fetch comments by user ID
  getCommentsByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/comments?userId=${userId}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // GET - Fetch albums by user ID
  getAlbumsByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/albums?userId=${userId}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // GET - Fetch photos by user ID
  getPhotosByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/photos?albumId=${userId}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // GET - Fetch todos by user ID
  getTodosByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/todos?userId=${userId}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // POST - Create new post
  createPost(data: any): Observable<any> {
    const url = `${this.baseUrl}/posts`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // PUT - Update existing post
  updatePost(postId: number, data: any): Observable<any> {
    const url = `${this.baseUrl}/posts/${postId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(url, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // DELETE - Delete post
  deletePost(postId: number): Observable<any> {
    const url = `${this.baseUrl}/posts/${postId}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server Error: Status ${error.status}, Message: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}