declare module '@ioc:Adonis/Core/Response' {
    interface ResponseContract {
        validationError(message?: string | undefined): object
    }
  }
