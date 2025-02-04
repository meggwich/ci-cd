import loadUser from '../server-call';
import { httpGet } from '../http';
jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});
test('should call loadUser once', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});