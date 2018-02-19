## Laravel and Vue JS authentication using JSON Web Tokens

This source code demonstrates how to use JWTs with Laravel and Vue JS.

Laravel version 5.5

[Blog post - Part 1](http://blog.peterplucinski.com/setting-up-jwt-authentication-with-laravel-and-vue-part-1/)

[Blog post - Part 2](http://blog.peterplucinski.com/setting-up-jwt-authentication-with-laravel-and-vue-part-2/)

## Setting up the project

1. Clone the repository
1. Run `composer install`
1. Configure Laravel directory permissions ([documentation](https://laravel.com/docs/5.5))
1. Setup database configuration inside `.env`
1. Run `php artisan migrate`
1. Run `php artisan jwt:secret`
1. Run `npm install`
1. Use `php artisan tinker` to create a test user:

```
App\User::create(['name' => 'Test User', 'email' => 'test@email.com', 'password' => Hash::make('Password01')])
```

![Login page](screenshot.png "Login page")

