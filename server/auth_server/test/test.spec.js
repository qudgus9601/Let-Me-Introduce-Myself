const assert = require("chai").assert;
const app = require("../index");
const request = require("supertest");

describe("Auth Server Test", () => {
  it("👀 Do Test", () => {
    true;
  });
});

describe("회원가입 테스트", () => {
  it("아이디가 없을 시 400 코드를 반환합니다.", () => {
    return request(app)
      .post("/api/v1/user/exist-email")
      .send({ id: "admin@behoney.info" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: "ok" });
      });
  });
});
