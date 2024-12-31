import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if URL matches allowed list
  if (req.url.includes('/api/messages/')) {
    console.log('Intercepting request:', req.url);
    
    // Clone and modify the request if needed
    const modifiedReq = req.clone({
      headers: req.headers.set('Custom-Header', 'value')
    });
    
    return next(modifiedReq);
  }
  
  // Pass through other requests unchanged
  return next(req);
};