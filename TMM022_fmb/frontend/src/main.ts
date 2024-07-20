import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Exit button logic
function setupExitButton() {
  const exitButton = document.getElementById('exitButton');
  if (exitButton) {
    exitButton.addEventListener('click', () => {
      const confirmation = confirm('Do you want to exit?');
      if (confirmation) {
        window.close();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', setupExitButton);
