import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  
});


describe('Devices Reducer' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Can get devices', () => {
    expect(component).to.exist;
  });

  
});