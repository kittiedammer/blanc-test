# BlancTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Тестовое задание

Задание для кандидатов на позицию frontend-разработчика
Стек: Angular + библиотека компонентов PrimeNG
Нужно реализовать список клиентов, в котором четыре столбца:
- наименование организации,
- ИНН,
- дата открытия счета в формате "13 декабря 2020",
- остаток на счёте
Данные получаем GET запросом (GET /clients)
При клике на строку открывается карточка клиента. Карточка имеет свой роут
(URL). Данные по конкретному клиенту берем из запроса GET /clients/
{clientId}. В карточке клиента, кроме вышеперечисленных полей, должны
выводиться:
- номер телефона в формате + 7 (999) 999 99 99 с возможностью
редактирования. Редактирование: рядом с полем разместить кнопку
«изменить», при клике на которую поле преобразуется в редактируемый
input с кнопками «Ок» и «Отмена». При нажатии на «Ок» пользователю
показывается диалоговое окно с подтверждением смены номера телефона
с кнопками «Подтвердить» и «Отмена». Если пользователь подтверждает
операцию, то отправить POST запрос на сервер POST /{clientId}/
changephone, тело запроса: {phone: ‘+79998888888’} (условия по
мокированию запросов указаны ниже)
- таблица со списком транзакций (платежей) с полями:
Дата платежа в формате «13.12.2020»
Контрагент
Сумма
Тип (входящий/исходящий)
* Данные берём из моков: их нужно реализовать с помощью интерсептора,
который перехватывает http запросы и проверяет наличие замоканных
данных для конкретного url запроса и, в случае наличия, подставляет
заданный мок в тело ответа
Организовать стейт менеджмент с помощью сервисов, используя
преимущества BehaviorSubject. Полученные данные от API записывать/брать
из стейта.
Реализовать единый компонент для вывода отформатированной денежной
суммы (с маской вида 1 000 000.00, с округлением и с возможностью указать
количество знаков после запятой и минимальное количество знаков до
запятой) со знаком валюты (RUB — ₽, USD — $ и т.д.)
Код приложения нужно выложить в свой репозиторий на Github.
Дополнительным плюсом будет:
- подключить к проекту сервис Google Firebase и с его помощью реализовать
деплой проекта