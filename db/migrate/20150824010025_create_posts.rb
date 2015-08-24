class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :content, null: false
      t.integer :user_id, null: false
      t.integer :topic_id, null: false

      t.timestamps null: false
    end

    add_index :posts, :topic_id
  end
end
