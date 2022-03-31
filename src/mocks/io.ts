const ioMock = () => ({
  observe: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(ioMock); 