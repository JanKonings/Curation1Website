<?php
// saveData.php

// Get the JSON data sent from the JavaScript fetch request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Format the data as a string
    $formattedData = "Name: $name\nEmail: $email\nMessage: $message\n\n";

    // Append the data to a file named data.txt
    file_put_contents('submission.txt', $formattedData, FILE_APPEND);

    // Send a JSON response back to the client
    echo json_encode(['message' => 'Data saved successfully!']);
} else {
    echo json_encode(['message' => 'No data received']);
}
?>