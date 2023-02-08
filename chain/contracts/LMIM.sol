// SPDX-License-Identifier: MIT

pragma solidity >= 0.8.0;

contract LMIM {
    // 필요한 내용
    // 사용자의 이더리움 잔액확인
    // 사용자의 이더리움 전송 권한
    // 사용자의 이더리움으로 민팅

    // 상태값 선언부

    string private _name;
    string private _symbol;
    uint256 private _totalSupply;

    // mapping
    mapping (uint256 => string) private _tokenInfo;
    mapping (address => uint256) private _balances;
    
    // event
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    // contract 생성자
    constructor(string memory name_, string memory symbol_) {
        _name=name_;
        _symbol=symbol_;
    }

    // view 함수들
    function name() public view returns (string memory) {
        return _name;
    }
    function symbol() public view returns (string memory) {
        return _symbol;
    }
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
    function balanceOf(address from) public view returns (uint256) {
        return _balances[from];
    }
    function tokenInfo(uint256 tokenId) public view returns (string memory) {
        return _tokenInfo[tokenId];
    }

    // payable 함수들
    function mint(address to, string memory metadataURI) external payable {
        // 발행자와 메타데이터 주소를 받아와서 민팅을 진행한다.
        // 0.01 이더를 받아야만 가능하고
        // 발행자의 토큰 갯수 ++
        // 총 발행량 ++
        // 토큰 정보에 메타데이터 꽂아넣기
        // 다 발행 되었으면 해당 토큰을 발행자에게 전송
        // require(msg.value >= 0.01 ether); 굳이 안넣기로 했음 그냥
        require(to != address(0), "ERC721: shouldn't mint to the zero address");
        _balances[to]++;
        _totalSupply++;
        _tokenInfo[_totalSupply] = metadataURI;
        emit Transfer(address(0), to, _totalSupply);
    }
}