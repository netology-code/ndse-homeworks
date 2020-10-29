# Развёртывание приложения на Heroku

### Шаг 1. Изменение имён переменных окружения

Необходимо поменять имена переменных окружения на `PORT` (т.к. облачный сервис Heroku в переменную окружения `PORT` записывает тот порт, на котором должно запускаться ваше приложение).

```node
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`);
});
```


### Шаг 2. package.json

В файле *package.json* обязательно указать **"scripts"."start"** для запуска вашего приложения:

```node
"scripts": {
    "start": "node index.js"
  },
```

Это указание Heroku, какой файл нужно запускать. Heroku сам скачает все необходимые  **"dependencies"** зависимости проекта и запустит его.

### Шаг 3. Регистрация на Heroku
Перед регистрацией на Heroku не забудьте создать репо на GitHub и запушить в него свой проект.

#### 3.1. Переходите по адресу https://heroku.com и нажимаете на кнопку SignUp.
Заполняете форму, укажите, что вы Student, из Российской Федерации и ваш основной язык node.js
![image](https://user-images.githubusercontent.com/31243887/97407529-9e447f80-191c-11eb-8921-01adc2492f24.png)

#### 3.2. После подтверждения email и всех формальностей, логинитесь (кнопка Login):

![image](https://user-images.githubusercontent.com/31243887/97407640-c7651000-191c-11eb-97c2-5b7301bf6dd5.png)


#### 3.3. Переходим на Dashboard:
![image](https://user-images.githubusercontent.com/31243887/97407651-cd5af100-191c-11eb-92ac-cd05e412203a.png)

#### 3.4. Выбираем создание нового приложения:
![image](https://user-images.githubusercontent.com/31243887/97407668-d3e96880-191c-11eb-9100-d2257feb3c6b.png)

#### 3.5. Выбираем имя:
![image](https://user-images.githubusercontent.com/31243887/97416287-0f3d6480-1928-11eb-88df-da0c665fad79.png)

**Важно**: нужно придумать уникальное *имя* и удостовериться, что оно не занято. Имя *nodejs-express-ejs* мы уже заняли, поэтому использовать его уже не получится.

Вводите что-нибудь наподобие `<github-login>`-ejs (где *`<github-login>`* - это ваш логин на GitHub). Тогда вероятность того, что это имя не занято, будет выше.

После выбора уникального имени нажимаем на **Create App**.

#### 3.6. Deploy:
На следующей странице находим секцию Deploy, выбираем GitHub и нажимаем Connect:
![image](https://user-images.githubusercontent.com/31243887/97416642-82df7180-1928-11eb-9312-3721db63386c.png)

### 3.7. Access:
Откроется новое окно, в котором Heroku запросит доступ к вашим репозиториям на GitHub (чтобы получать уведомления о том, что вы сделали Push и т.д.):
Это позволит при каждом новом Push'е в репозиторий автоматически разворачивать новую версию приложения на сервере.

### 3.8. Search:
После предоставления доступа Heroku, введите имя репозитория на **GitHub** и нажмите **Search**:
![image](https://user-images.githubusercontent.com/31243887/97417470-8e7f6800-1929-11eb-8e66-ea0ed6ed1b24.png)

Обратите внимание: название репо не обязательно должно соответствовать названию приложения на Heroku!

В нашем примере репо - *node-23-ejs*, название приложения - *nodejs-express-ejs*.

### 3.9. Connect:
![image](https://user-images.githubusercontent.com/31243887/97419192-97713900-192b-11eb-8d4e-15aa3d733e96.png)

Если всё прошло успешно, вы увидите, примерно, следующие:
![image](https://user-images.githubusercontent.com/31243887/97419387-d1423f80-192b-11eb-9175-368beda8fe5a.png)



### 3.10. Automatic Deploys
На той же странице переходим в раздел Automatic Deploys,  нажимаем кнопку **Enable Automatic Deploys**: 
![image](https://user-images.githubusercontent.com/31243887/97419699-3007b900-192c-11eb-841b-17f5a643b1d2.png)



### 3.11. Manual Deploys
Чтобы инициировать развёртывание, можно либо сделать Push в GitHub репозиторий, либо ниже в секции Manual Deploy нажать на Deploy: 
![image](https://user-images.githubusercontent.com/31243887/97420273-ebc8e880-192c-11eb-8c8a-bcbb7195577b.png)

Если с вашим приложением всё в порядке, то вы увидите кнопку View, на которой нужно кликнуть:
![image](https://user-images.githubusercontent.com/31243887/97421116-f2a42b00-192d-11eb-8478-0e86f60cf168.png)

Попадаем на главную страницу:
![image](https://user-images.githubusercontent.com/31243887/97424443-8d9f0400-1932-11eb-87eb-baca038946ab.png)


### 3.12. README.md
Осталось последняя часть: в GitHub репо создайте прямо в корне файл README.md и скопируйте в него ссылку на ваше приложение на Heroku.
