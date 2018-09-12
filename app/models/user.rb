require 'bcrypt'
class User < ApplicationRecord
  validates :name, presence: true
  has_secure_password
  def password
    @password ||= BCrypt::Password.new(password_digest)
  end

  def is_password? (old, new)
    BCrypt::Password.new(old) == new
  end
  def password= new_password
    @password = BCrypt::Password.create(new_password)
    self.password_digest = @password
  end
end
