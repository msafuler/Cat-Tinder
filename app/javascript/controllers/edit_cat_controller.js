import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['form', 'name', 'gender', 'breed', 'description'];

  displayNameField() {
    this.nameTarget.classList.remove('not-focused');
  }

  displayGenderField() {
    this.genderTarget.classList.remove('not-focused');
  }

  displayBreedField() {
    this.breedTarget.classList.remove('not-focused');
  }

  displayDescriptionField() {
    this.descriptionTarget.classList.remove('not-focused');
  }

update(event) {
  event.preventDefault();
  const url = this.formTarget.action
  fetch(url, {
    method: 'PATCH',
    headers: { 'Accept': 'text/plain' },
    body: new FormData(this.formTarget)
  })
  .then(response => response.text())
  .then((data) => {
    this.formTarget.outerHTML = data;
  })
}

}
