import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception.getResponse());
    console.log(exception.getStatus());
    console.log(exception);

    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();

    response.json({
      status: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}
