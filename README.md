# Mobile App: Weather Check
A simple and weather forecast app.

## 1. Description
This project is a cross-platform mobile application designed to help users check weather based on city and see the forecast for now, and next 5 hours.

**Tech Stack:**
- **react-native**
- **redux** for state management
- **redux-saga** for asynchronous calls and app logic
- **jest** for testing
- **reselect** for simplifying selectors

## 2. Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/farukyazici/weather-check.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-check
   ```
3. Install the dependencies:
   ```bash
   yarn install
   ```
   If you are running the project on iOS, you need to install the CocoaPods dependencies:
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Run the app on an emulator or physical device:
   ```bash
   yarn android   # For Android
   yarn ios       # For iOS
   ```
5. Alternatively, use XCode or Android Studio to build and run the app


### 3. **Usage**
The app opens with a homepage which includes a search bar, location info, current weather and upcoming forecast sections.
   - Search: A simple input to search by city names.
   - Location: Shows the city, country and timezone info.
   - Current weather: Shows current weather text, tempoerature, weather icon and time.
   - Forecast: Shows the forecast for upcoming 5 hours. If end of the day is near, it shows overnight hours from the next day.


### 4. **Testing**
- The app is tested via the commandd:
   ```bash
   yarn test
   ```
   The test command is configured to show the coverage. Currently, testing coverage is 100% as follows:

   <img src="https://i.ibb.co/7bgHTX2/Screenshot-2024-09-11-at-21-37-01.png" />

