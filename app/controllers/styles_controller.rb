class StylesController < ApplicationController
  before_action :authenticate_user!
  def index
    @user = User.find(params[:id])
  end

  def show
    @user = User.find(params[:id])
  end

  def new
  end

  def list
  end
end
