<?php
$jsonFile = 'tasks.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Leggi i dati dal file JSON e restituiscili come risposta
    $tasksData = file_get_contents($jsonFile);
    header('Content-Type: application/json');
    echo $tasksData;
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Salva i dati nel file JSON
    $requestData = json_decode(file_get_contents('php://input'), true);
    file_put_contents($jsonFile, json_encode($requestData));
}
?>