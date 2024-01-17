
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

    // Переменные, которые отправляет пользователь
    $formname = 'Заявка на обратный звонок - Вакансии';
    $firstName = $_POST['firstName'];
    $phone = $_POST['phone'];
    $file = $_FILES['myFile'];

    // Переменные для отправки сообщений в  Телеграм

    $token = "6196568737:AAGJ5MuqvJZtTY26XD5m0oiQBH_34eHpZQw"; // Тут пишем токен
    $chat_id = "-858140650"; // Тут пишем ID чата, куда будут отправляться сообщения
    $sitename = "veon-tech.by"; //Указываем название сайта

    // Формирование самого письма

    $title = "Письмо с сайта Veon-tech";
    $body = "
    <h2>$formname</h2>
    <table align='center' border='1' cellpadding='10' cellspacing='20' width='100%'>
    <tr><td style='background-color: #E9FCE5; color: #444; border-radius: 16px;'><b>Имя:</b> $firstName</td><td style='background-color: #E9FCE5; color: #444; border-radius: 16px;'><b>Телефон:</b> $phone</td></tr>
    <table>
    ";

    $bodytelegram = "Отклик на вакансию.%0AИмя: $firstName.%0AТелефон: $phone";

    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 1;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['data']['debug'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'veontechsite@gmail.com'; // Логин на почте
    $mail->Password   = 'roebckzpvowhxsfo'; // Пароль на почте
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('veontechsite@gmail.com', 'Veon-tech'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('clients@veon-tech.ru');
    //$mail->addAddress('vitaliam87@yandex.ru'); // Ещё один, если нужен

    // Прикрипление файлов к письму
    $mail->addAttachment($_FILES['myFile']['tmp_name'], $_FILES['myFile']['name']);

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
    $sendToTelegram = fopen("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&parse_mode=html&text=$bodytelegram", "r");
    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Сообщение успешно отправлено!";
    } else {
        $data['result'] = "error";
        $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
        $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
    }
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);

?>
