// #include <WiFi.h>
// #include <Firebase_ESP_Client.h>
// #include <Adafruit_Sensor.h>
// #include <Adafruit_ADXL345_U.h>
// #include "addons/TokenHelper.h"
// #include "addons/RTDBHelper.h"

// // Wi-Fi credentials
// #define WIFI_SSID "Tanveer"
// #define WIFI_PASSWORD "Taimoor@725"

// // Firebase configuration
// #define API_KEY "AIzaSyCt56rUgXAWDcAOEFwUmO5WXI_Je6GE4ik"
// #define DATABASE_URL "https://fyp-sensor-readings-default-rtdb.asia-southeast1.firebasedatabase.app/"

// // Firebase and sensor objects
// FirebaseData fbdo;
// FirebaseAuth auth;
// FirebaseConfig config;
// Adafruit_ADXL345_Unified adxl = Adafruit_ADXL345_Unified();

// // Variables for data tracking
// unsigned long lastSendTime = 0;
// int restartCounter = 0;
// bool signupOK = false;

// void setup() {
//   Serial.begin(115200);

//   // Connect to Wi-Fi
//   Serial.print("Connecting to Wi-Fi");
//   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
//   while (WiFi.status() != WL_CONNECTED) {
//     Serial.print(".");
//     delay(300);
//   }
//   Serial.println("\nWi-Fi connected.");
//   Serial.print("IP address: ");
//   Serial.println(WiFi.localIP());

//   // Firebase configuration
//   config.api_key = API_KEY;
//   config.database_url = DATABASE_URL;
//   config.token_status_callback = tokenStatusCallback;



//   // Sign up anonymously for testing
//   if (Firebase.signUp(&config, &auth, "", "")) {
//     Serial.println("Firebase anonymous authentication successful.");
//     signupOK = true;
//   } else {
//     Serial.printf("Firebase signup error: %s\n", config.signer.signupError.message.c_str());
//   }

//   Firebase.begin(&config, &auth);
//   Firebase.reconnectWiFi(true);

//   // Initialize ADXL345 sensor
//   if (!adxl.begin()) {
//     Serial.println("Failed to initialize ADXL345 sensor.");
//     while (1); // Halt execution if the sensor initialization fails
//   }
//   Serial.println("ADXL345 initialized successfully.");

//   // Retrieve restart counter from Firebase
//   if (Firebase.ready() && signupOK) {
//     if (Firebase.RTDB.getInt(&fbdo, "SensorData/restart")) {
//       restartCounter = fbdo.intData();
//       Serial.print("Restart value: ");
//       Serial.println(restartCounter);
//     } else {
//       Serial.print("Failed to retrieve restart value: ");
//       Serial.println(fbdo.errorReason());
//     }
//   }
// }

// void loop() {
//   if (millis() - lastSendTime > 2000) {
//     lastSendTime = millis();

//     sensors_event_t event;
//     adxl.getEvent(&event);

//     String timestamp = String(++restartCounter);
//     Firebase.RTDB.setInt(&fbdo, "SensorData/restart", restartCounter);
//     Firebase.RTDB.setFloat(&fbdo, "SensorData/ADXL1/" + timestamp + "/X", event.acceleration.x);
//     Firebase.RTDB.setFloat(&fbdo, "SensorData/ADXL1/" + timestamp + "/Y", event.acceleration.y);
//     Firebase.RTDB.setFloat(&fbdo, "SensorData/ADXL1/" + timestamp + "/Z", event.acceleration.z);
//   }
// }
