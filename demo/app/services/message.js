System.register(["angular2/core"], function(exports_1) {
    var core_1;
    var MessageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                    this._emitter = new core_1.EventEmitter();
                    this._rx = this._emitter;
                }
                MessageService.prototype.emitMessage = function (data) {
                    this._rx.next(data);
                };
                return MessageService;
            })();
            exports_1("MessageService", MessageService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvbWVzc2FnZS50cyJdLCJuYW1lcyI6WyJNZXNzYWdlU2VydmljZSIsIk1lc3NhZ2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTWVzc2FnZVNlcnZpY2UuZW1pdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztZQUVBO2dCQUdDQTtvQkFGQUMsYUFBUUEsR0FBc0JBLElBQUlBLG1CQUFZQSxFQUFPQSxDQUFDQTtvQkFHckRBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBQ0RELG9DQUFXQSxHQUFYQSxVQUFZQSxJQUFTQTtvQkFDcEJFLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBQ0ZGLHFCQUFDQTtZQUFEQSxDQUFDQSxBQVRELElBU0M7WUFURCwyQ0FTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG5cdF9lbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRfcng6IGFueTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fcnggPSB0aGlzLl9lbWl0dGVyO1xuXHR9XG5cdGVtaXRNZXNzYWdlKGRhdGE6IGFueSkge1xuXHRcdHRoaXMuX3J4Lm5leHQoZGF0YSk7XG5cdH1cbn1cblxuIl19