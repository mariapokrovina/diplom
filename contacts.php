<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Неверный метод запроса']);
    exit;
}

$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($email) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'Заполните все поля']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Некорректный email']);
    exit;
}

if (strlen($message) < 10) {
    echo json_encode(['status' => 'error', 'message' => 'Сообщение слишком короткое']);
    exit;
}

$to = "pokrovinam@gmail.com";                    // ← Замените на реальный email центра
$subject = "Новое сообщение с сайта IT-КУБ";

$body = "Новое сообщение с формы обратной связи\n\n";
$body .= "Email отправителя: " . $email . "\n\n";
$body .= "Сообщение:\n" . $message . "\n\n";
$body .= "Дата: " . date('d.m.Y H:i:s');

$headers = "From: pokrovinam@gmail.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Ошибка при отправке сообщения. Попробуйте позже.']);
}
?>