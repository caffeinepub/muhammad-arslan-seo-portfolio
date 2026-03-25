import Text "mo:core/Text";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import List "mo:core/List";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";

actor {
  // ADMIN
  let adminId = Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai");

  type Message = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Message {
    public func compare(msg1 : Message, msg2 : Message) : Order.Order {
      Int.compare(msg2.timestamp, msg1.timestamp);
    };
  };

  // State
  let messages = List.empty<Message>();

  public type MessageInput = {
    name : Text;
    email : Text;
    message : Text;
  };

  // Submit Contact Message
  public shared ({ caller }) func submitMessage(input : MessageInput) : async () {
    let newMessage : Message = {
      input with
      timestamp = Time.now();
    };
    messages.add(newMessage);
  };

  // Get All Messages (Admin only)
  public query ({ caller }) func getAllMessages() : async [Message] {
    if (caller != adminId) {
      Runtime.trap("Unauthorized. Only the admin can view messages.");
    };
    messages.toArray().sort();
  };
};
