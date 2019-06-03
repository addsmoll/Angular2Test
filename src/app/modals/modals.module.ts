import { UIModule } from './../ui/ui.module';
import { ImageCropperComponent, ImageCropperModule } from 'ng2-img-cropper';
import { UserAvatarChangeComponent } from './user-avatar-change/user-avatar-change.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modalsComponents = [
  UserAvatarChangeComponent,

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ImageCropperModule,
    NgbModule,
    UIModule
  ],
  exports: [
    ...modalsComponents
  ],
  entryComponents: [
    UserAvatarChangeComponent
  ],
  declarations: [...modalsComponents]
})
export class ModalsModule { }
